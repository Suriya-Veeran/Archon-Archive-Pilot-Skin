import { Routes } from '@angular/router';

/** Profile purpose DECOM. */
export const DECOM_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: 'overview',
    loadComponent: () =>
      import('./overview/decom-overview/decom-overview').then((m) => m.DecomOverview),
    title: 'Overview',
  },
  {
    path: 'discover/business-area',
    loadComponent: () =>
      import('./discover/business-area/business-area').then((m) => m.DecomBusinessArea),
    title: 'Business area',
  },
  {
    path: 'discover/tcodes',
    loadComponent: () => import('./discover/tcodes/tcodes').then((m) => m.DecomTcodes),
    title: 'T-codes',
  },
  {
    path: 'discover/security',
    loadComponent: () => import('./discover/security/security').then((m) => m.DecomSecurity),
    title: 'Security',
  },
  {
    path: 'statistics/dashboards',
    loadComponent: () =>
      import('./statistics/dashboards/dashboards').then((m) => m.DecomDashboards),
    title: 'Dashboards',
  },
  {
    path: 'statistics/archive-report',
    loadComponent: () =>
      import('./statistics/archive-report/archive-report').then((m) => m.DecomArchiveReport),
    title: 'Archive report',
  },
  {
    path: 'plan',
    loadComponent: () => import('./plan/plan-page/plan-page').then((m) => m.DecomPlanPage),
    title: 'Plan',
  },
  {
    path: 'history',
    loadComponent: () => import('./history/run-history/run-history').then((m) => m.DecomRunHistory),
    title: 'History',
  },
  {
    path: 'history/:runId',
    loadComponent: () => import('./history/run-detail/run-detail').then((m) => m.DecomRunDetail),
    title: 'Run',
  },
  {
    path: 'objects/metadata',
    loadComponent: () => import('./objects/metadata/metadata').then((m) => m.DecomMetadata),
    title: 'Metadata',
  },
  {
    path: 'objects/relationships',
    loadComponent: () =>
      import('./objects/relationships/relationships').then((m) => m.DecomRelationships),
    title: 'Relationships',
  },
  { path: 'discover', pathMatch: 'full', redirectTo: 'discover/business-area' },
  { path: 'statistics', pathMatch: 'full', redirectTo: 'statistics/dashboards' },
  { path: 'objects', pathMatch: 'full', redirectTo: 'objects/metadata' },
];
