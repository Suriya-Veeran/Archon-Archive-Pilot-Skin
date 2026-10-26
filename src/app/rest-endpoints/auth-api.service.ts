import { inject, Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, User } from '@auth/models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ENDPOINTS } from './endpoints';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly api = inject(ApiService);

  login(body: LoginRequest): Observable<LoginResponse> {
    return this.api.post<LoginResponse>(ENDPOINTS.auth.login, body);
  }

  me(): Observable<User> {
    return this.api.get<User>(ENDPOINTS.auth.me);
  }
}
