import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@core/config/app-config';
import { ApiService } from '@api/api.service';
import { ENDPOINTS } from '@api/endpoints';
import { Observable, of, tap } from 'rxjs';
import { LoginRequest, LoginResponse, User } from './auth.models';

const TOKEN_KEY = 'archon.token';
const USER_KEY = 'archon.user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly useMock = inject(APP_CONFIG).useMockAuth;

  readonly token = signal<string | null>(localStorage.getItem(TOKEN_KEY));
  readonly user = signal<User | null>(JSON.parse(localStorage.getItem(USER_KEY) ?? 'null'));
  readonly isLoggedIn = computed(() => !!this.token());

  login(req: LoginRequest): Observable<LoginResponse> {
    const call = this.useMock
      ? of({ token: 'mock-token', user: { id: '1', name: req.username, roles: ['ADMIN'] } })
      : this.api.post<LoginResponse>(ENDPOINTS.auth.login, req);
    return call.pipe(
      tap(({ token, user }) => {
        this.token.set(token);
        this.user.set(user);
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      }),
    );
  }

  logout(): void {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    void this.router.navigate(['/login']);
  }
}
