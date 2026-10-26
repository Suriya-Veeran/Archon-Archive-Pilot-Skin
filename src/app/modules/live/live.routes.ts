import { Routes } from '@angular/router';

/** Profile purpose LIVE. */
export const LIVE_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: 'overview',
    loadComponent: () => import('./overview/overview').then((m) => m.LiveOverview),
    title: 'Overview · Live',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.LiveDashboard),
    title: 'Dashboard · Live',
  },
  {
    path: 'report',
    loadComponent: () => import('./report/report-page/report-page').then((m) => m.LiveReportPage),
    title: 'Report · Live',
  },
  {
    path: 'objects',
    loadComponent: () =>
      import('./objects/objects-page/objects-page').then((m) => m.LiveObjectsPage),
    title: 'Objects · Live',
  },
  {
    path: 'jobs',
    loadComponent: () => import('./jobs/jobs-page/jobs-page').then((m) => m.LiveJobsPage),
    title: 'Jobs · Live',
  },
  {
    path: 'jobs/:jobId',
    loadComponent: () => import('./jobs/job-detail/job-detail').then((m) => m.LiveJobDetail),
    title: 'Job · Live',
  },
  {
    path: 'analysis',
    loadComponent: () => import('./analysis/analysis').then((m) => m.LiveAnalysis),
    title: 'Analysis · Live',
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar').then((m) => m.LiveCalendar),
    title: 'Calendar · Live',
  },
  {
    path: 'sessions',
    loadComponent: () => import('./sessions/sessions').then((m) => m.LiveSessions),
    title: 'Sessions · Live',
  },
  {
    path: 'sources',
    loadComponent: () => import('./sources/sources').then((m) => m.LiveSources),
    title: 'Sources · Live',
  },
  {
    path: 'repositories',
    loadComponent: () => import('./repositories/repositories').then((m) => m.LiveRepositories),
    title: 'Repositories · Live',
  },
  // kept as a route, not in the menu (functional spec §9)
  {
    path: 'livelog',
    loadComponent: () => import('./livelog/livelog').then((m) => m.LiveLivelog),
    title: 'Live log · Live',
  },
];
