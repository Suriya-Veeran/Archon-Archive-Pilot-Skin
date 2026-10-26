/** Every backend path in one place. Paths are relative to environment.apiBaseUrl. */
const enc = encodeURIComponent;

export const ENDPOINTS = {
  auth: {
    login: 'auth/login',
    logout: 'auth/logout',
    me: 'auth/me',
    ssoLogin: 'auth/sso/login',
  },
  settings: {
    root: 'settings',
  },
  live: {
    overview: 'live/overview',
    dashboard: 'live/dashboard',
    report: 'live/report',
    reportExport: (format: 'csv' | 'pdf') => `live/report/export.${format}`,
    objects: 'live/objects',
    object: (id: string) => `live/objects/${enc(id)}`,
    variants: (objectId: string) => `live/objects/${enc(objectId)}/variants`,
    jobs: 'live/jobs',
    job: (id: string) => `live/jobs/${enc(id)}`,
    jobLog: (id: string) => `live/jobs/${enc(id)}/log`,
    sapJobs: 'live/sap-jobs',
    analysis: 'live/analysis',
    calendar: 'live/calendar',
    sessions: 'live/sessions',
    sources: 'live/sources',
    repositories: 'live/repositories',
    livelog: 'live/livelog',
  },
  decom: {
    overview: 'decom/overview',
    businessArea: 'decom/discover/business-area',
    tcodes: 'decom/discover/tcodes',
    security: 'decom/discover/security',
    dashboards: 'decom/statistics/dashboards',
    archiveReport: 'decom/statistics/archive-report',
    plan: 'decom/plan',
    runs: 'decom/history/runs',
    run: (id: string) => `decom/history/runs/${enc(id)}`,
    metadata: 'decom/objects/metadata',
    relationships: 'decom/objects/relationships',
  },
  tour: { progress: 'tour/progress' },
} as const;
