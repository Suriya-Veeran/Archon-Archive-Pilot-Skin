import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@core/config/app-config';
import { STORAGE_KEYS } from '@core/config/storage-keys';
import { StorageService } from '@core/services/storage.service';
import { AuthApiService } from '@api/auth-api.service';
import { Observable, of, tap } from 'rxjs';
import { LoginRequest, LoginResponse, User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authApi = inject(AuthApiService);
  private readonly storage = inject(StorageService);
  private readonly router = inject(Router);
  private readonly config = inject(APP_CONFIG);

  private readonly _token = signal<string | null>(this.storage.get<string>(STORAGE_KEYS.token));
  private readonly _user = signal<User | null>(this.storage.get<User>(STORAGE_KEYS.user));

  readonly token = this._token.asReadonly();
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._token());

  login(request: LoginRequest): Observable<LoginResponse> {
    const call = this.config.useMockAuth
      ? of<LoginResponse>({
          token: 'mock-token',
          user: {
            id: '1',
            username: request.username,
            displayName: request.username,
            email: `${request.username}@archon.local`,
            roles: ['ADMIN'],
          },
        })
      : this.authApi.login(request);
    return call.pipe(tap((res) => this.setSession(res)));
  }

  /** Redirects the browser to the identity provider. */
  startSso(): void {
    window.location.href = this.config.ssoLoginUrl;
  }

  /** Called by the SSO callback page with the token returned by the IdP. */
  completeSso(token: string): Observable<User> {
    this._token.set(token);
    this.storage.set(STORAGE_KEYS.token, token);
    return this.authApi.me().pipe(
      tap((user) => {
        this._user.set(user);
        this.storage.set(STORAGE_KEYS.user, user);
      }),
    );
  }

  hasRole(...roles: string[]): boolean {
    const mine = this._user()?.roles ?? [];
    return roles.length === 0 || roles.some((r) => mine.includes(r));
  }

  logout(): void {
    this.clearSession();
    void this.router.navigate(['/login']);
  }

  clearSession(): void {
    this._token.set(null);
    this._user.set(null);
    this.storage.remove(STORAGE_KEYS.token);
    this.storage.remove(STORAGE_KEYS.user);
  }

  private setSession({ token, user }: LoginResponse): void {
    this._token.set(token);
    this._user.set(user);
    this.storage.set(STORAGE_KEYS.token, token);
    this.storage.set(STORAGE_KEYS.user, user);
  }
}
