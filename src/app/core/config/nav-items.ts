import { NavItem, Profile } from '../models/profile.model';

/** Sidebar per profile. live/livelog keeps its route but is not in the menu (functional spec §9). */
export const NAV_ITEMS: Record<Profile, NavItem[]> = {
  live: [
    { label: 'Overview', path: '/live/overview' },
    { label: 'Dashboard', path: '/live/dashboard' },
    { label: 'Report', path: '/live/report' },
    { label: 'Objects', path: '/live/objects' },
    { label: 'Jobs', path: '/live/jobs' },
    { label: 'Analysis', path: '/live/analysis' },
    { label: 'Calendar', path: '/live/calendar' },
    { label: 'Sessions', path: '/live/sessions' },
    { label: 'Sources', path: '/live/sources' },
    { label: 'Repositories', path: '/live/repositories' },
  ],
  decom: [
    { label: 'Overview', path: '/decom/overview' },
    {
      label: 'Discover',
      path: '/decom/discover',
      children: [
        { label: 'Business area', path: '/decom/discover/business-area' },
        { label: 'T-codes', path: '/decom/discover/tcodes' },
        { label: 'Security', path: '/decom/discover/security' },
      ],
    },
    {
      label: 'Statistics',
      path: '/decom/statistics',
      children: [
        { label: 'Dashboards', path: '/decom/statistics/dashboards' },
        { label: 'Archive report', path: '/decom/statistics/archive-report' },
      ],
    },
    { label: 'Plan', path: '/decom/plan' },
    { label: 'History', path: '/decom/history' },
    {
      label: 'Objects',
      path: '/decom/objects',
      children: [
        { label: 'Metadata', path: '/decom/objects/metadata' },
        { label: 'Relationships', path: '/decom/objects/relationships' },
      ],
    },
  ],
};

/** Shared by both modes. */
export const SHARED_NAV_ITEMS: NavItem[] = [
  { label: 'Settings', path: '/settings' },
  { label: 'Tour', path: '/tour' },
];
