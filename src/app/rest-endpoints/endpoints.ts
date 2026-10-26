/** Every backend path in one place, relative to environment.apiBaseUrl. */
export const ENDPOINTS = {
  auth: { login: 'auth/login', me: 'auth/me' },
  live: {
    overview: 'live/overview',
    dashboard: 'live/dashboard',
    report: 'live/report',
    objects: 'live/objects',
    jobs: 'live/jobs',
    job: (id: string) => `live/jobs/${encodeURIComponent(id)}`,
  },
  decom: {
    overview: 'decom/overview',
    discover: 'decom/discover',
    statistics: 'decom/statistics',
    plan: 'decom/plan',
    runs: 'decom/history/runs',
    run: (id: string) => `decom/history/runs/${encodeURIComponent(id)}`,
    objects: 'decom/objects',
  },
  settings: 'settings',
} as const;
