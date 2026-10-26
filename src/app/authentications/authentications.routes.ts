import { Routes } from '@angular/router';
import { guestGuard } from './guards/guest.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./login/login').then((m) => m.Login),
    title: 'Sign in · Archon',
  },
  {
    path: 'sso',
    loadComponent: () => import('./sso/sso').then((m) => m.Sso),
    title: 'SSO · Archon',
  },
  { path: 'logout', loadComponent: () => import('./logout/logout').then((m) => m.Logout) },
];
