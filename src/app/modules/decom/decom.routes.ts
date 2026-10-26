import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '@core/guards/unsaved-changes.guard';
import { provideArchonShared } from '@shared';

/** Profile purpose DECOM. */
export const DECOM_ROUTES: Routes = [
  {
    path: '',
    // example of module-level customisation: every shared table in DECOM pages 50 rows
    providers: [provideArchonShared({ table: { pageSize: 50 } })],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      {
        path: 'overview',
        loadComponent: () =>
          import('./overview/decom-overview/decom-overview').then((m) => m.DecomOverview),
        title: 'Overview · Decom',
      },
      { path: 'discover', pathMatch: 'full', redirectTo: 'discover/business-area' },
      {
        path: 'discover/business-area',
        loadComponent: () =>
          import('./discover/business-area/business-area').then((m) => m.DecomBusinessArea),
        title: 'Business area · Decom',
      },
      {
        path: 'discover/tcodes',
        loadComponent: () => import('./discover/tcodes/tcodes').then((m) => m.DecomTcodes),
        title: 'T-codes · Decom',
      },
      {
        path: 'discover/security',
        loadComponent: () => import('./discover/security/security').then((m) => m.DecomSecurity),
        title: 'Security · Decom',
      },
      { path: 'statistics', pathMatch: 'full', redirectTo: 'statistics/dashboards' },
      {
        path: 'statistics/dashboards',
        loadComponent: () =>
          import('./statistics/dashboards/dashboards').then((m) => m.DecomDashboards),
        title: 'Dashboards · Decom',
      },
      {
        path: 'statistics/archive-report',
        loadComponent: () =>
          import('./statistics/archive-report/archive-report').then((m) => m.DecomArchiveReport),
        title: 'Archive report · Decom',
      },
      {
        path: 'plan',
        loadComponent: () => import('./plan/plan-page/plan-page').then((m) => m.DecomPlanPage),
        canDeactivate: [unsavedChangesGuard],
        title: 'Plan · Decom',
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history/run-history/run-history').then((m) => m.DecomRunHistory),
        title: 'History · Decom',
      },
      {
        path: 'history/:runId',
        loadComponent: () =>
          import('./history/run-detail/run-detail').then((m) => m.DecomRunDetail),
        title: 'Run · Decom',
      },
      { path: 'objects', pathMatch: 'full', redirectTo: 'objects/metadata' },
      {
        path: 'objects/metadata',
        loadComponent: () => import('./objects/metadata/metadata').then((m) => m.DecomMetadata),
        title: 'Metadata · Decom',
      },
      {
        path: 'objects/relationships',
        loadComponent: () =>
          import('./objects/relationships/relationships').then((m) => m.DecomRelationships),
        title: 'Relationships · Decom',
      },
    ],
  },
];
