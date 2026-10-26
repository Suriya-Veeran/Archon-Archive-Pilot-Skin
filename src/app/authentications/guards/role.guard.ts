import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/** Usage: canActivate: [roleGuard], data: { roles: ['ADMIN'] } */
export const roleGuard: CanActivateFn = (route) =>
  inject(AuthService).hasRole(...((route.data['roles'] as string[] | undefined) ?? []))
    ? true
    : inject(Router).createUrlTree(['/']);
