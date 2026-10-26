import { Routes } from '@angular/router';

/** Profile purpose LIVE. */
export const LIVE_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: 'overview',
    loadComponent: () => import('./overview/overview').then((m) => m.LiveOverview),
    title: 'Overview',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.LiveDashboard),
    title: 'Dashboard',
  },
  {
    path: 'report',
    loadComponent: () => import('./report/report-page/report-page').then((m) => m.LiveReportPage),
    title: 'Report',
  },
  {
    path: 'objects',
    loadComponent: () =>
      import('./objects/objects-page/objects-page').then((m) => m.LiveObjectsPage),
    title: 'Objects',
  },
  {
    path: 'jobs',
    loadComponent: () => import('./jobs/jobs-page/jobs-page').then((m) => m.LiveJobsPage),
    title: 'Jobs',
  },
  {
    path: 'jobs/:jobId',
    loadComponent: () => import('./jobs/job-detail/job-detail').then((m) => m.LiveJobDetail),
    title: 'Job',
  },
  {
    path: 'analysis',
    loadComponent: () => import('./analysis/analysis').then((m) => m.LiveAnalysis),
    title: 'Analysis',
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar').then((m) => m.LiveCalendar),
    title: 'Calendar',
  },
  {
    path: 'sessions',
    loadComponent: () => import('./sessions/sessions').then((m) => m.LiveSessions),
    title: 'Sessions',
  },
  {
    path: 'sources',
    loadComponent: () => import('./sources/sources').then((m) => m.LiveSources),
    title: 'Sources',
  },
  {
    path: 'repositories',
    loadComponent: () => import('./repositories/repositories').then((m) => m.LiveRepositories),
    title: 'Repositories',
  },
  // route kept, not in the menu (functional spec §9)
  {
    path: 'livelog',
    loadComponent: () => import('./livelog/livelog').then((m) => m.LiveLivelog),
    title: 'Live log',
  },
];
