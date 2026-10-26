import { Routes } from '@angular/router';
import { authGuard } from '@auth/auth.guard';
import { AUTH_ROUTES } from '@auth/authentications.routes';
import { Content } from '@core/layout/content/content';

export const routes: Routes = [
  ...AUTH_ROUTES,
  {
    path: '',
    component: Content,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'live' },
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
      },
      { path: 'tour', loadComponent: () => import('@modules/tour/tour').then((m) => m.Tour) },
    ],
  },
  { path: '**', redirectTo: '' },
];
