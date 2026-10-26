import { Routes } from '@angular/router';
import { AUTH_ROUTES } from '@auth/authentications.routes';
import { authGuard } from '@auth/guards/auth.guard';
import { profileHomeGuard } from '@core/guards/profile-home.guard';
import { Content } from '@core/layout/content/content';

export const routes: Routes = [
  ...AUTH_ROUTES,
  {
    path: '',
    component: Content,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', canActivate: [profileHomeGuard], children: [] },
      {
        path: 'live',
        loadChildren: () => import('@modules/live/live.routes').then((m) => m.LIVE_ROUTES),
      },
      {
        path: 'decom',
        loadChildren: () => import('@modules/decom/decom.routes').then((m) => m.DECOM_ROUTES),
      },
      {
        path: 'settings',
        loadComponent: () => import('@modules/settings/settings').then((m) => m.Settings),
        title: 'Settings · Archon',
      },
      {
        path: 'tour',
        loadComponent: () => import('@modules/tour/tour').then((m) => m.Tour),
        title: 'Tour · Archon',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
