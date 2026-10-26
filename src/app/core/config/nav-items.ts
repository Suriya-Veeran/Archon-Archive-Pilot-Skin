import { NavItem, Profile } from '../models';

/** Sidebar per profile. live/livelog keeps its route but is not in the menu (functional spec §9). */
export const NAV_ITEMS: Record<Profile, NavItem[]> = {
  live: [
    { label: 'Overview', path: '/live/overview', icon: 'lucideHouse' },
    { label: 'Dashboard', path: '/live/dashboard', icon: 'lucideLayoutDashboard' },
    { label: 'Report', path: '/live/report', icon: 'lucideFileText' },
    { label: 'Objects', path: '/live/objects', icon: 'lucideBoxes' },
    { label: 'Jobs', path: '/live/jobs', icon: 'lucideListChecks' },
    { label: 'Analysis', path: '/live/analysis', icon: 'lucideActivity' },
    { label: 'Calendar', path: '/live/calendar', icon: 'lucideCalendar' },
    { label: 'Sessions', path: '/live/sessions', icon: 'lucideTimer' },
    { label: 'Sources', path: '/live/sources', icon: 'lucideServer' },
    { label: 'Repositories', path: '/live/repositories', icon: 'lucideDatabase' },
  ],
  decom: [
    { label: 'Overview', path: '/decom/overview', icon: 'lucideHouse' },
    {
      label: 'Discover',
      path: '/decom/discover',
      icon: 'lucideSearch',
      children: [
        { label: 'Business area', path: '/decom/discover/business-area' },
        { label: 'T-codes', path: '/decom/discover/tcodes' },
        { label: 'Security', path: '/decom/discover/security' },
      ],
    },
    {
      label: 'Statistics',
      path: '/decom/statistics',
      icon: 'lucideChartColumn',
      children: [
        { label: 'Dashboards', path: '/decom/statistics/dashboards' },
        { label: 'Archive report', path: '/decom/statistics/archive-report' },
      ],
    },
    { label: 'Plan', path: '/decom/plan', icon: 'lucideRoute' },
    { label: 'History', path: '/decom/history', icon: 'lucideHistory' },
    {
      label: 'Objects',
      path: '/decom/objects',
      icon: 'lucideFolderTree',
      children: [
        { label: 'Metadata', path: '/decom/objects/metadata' },
        { label: 'Relationships', path: '/decom/objects/relationships' },
      ],
    },
  ],
};

/** Shown in both profiles, under the profile menu. */
export const SHARED_NAV_ITEMS: NavItem[] = [
  { label: 'Settings', path: '/settings', icon: 'lucideSettings' },
  { label: 'Tour', path: '/tour', icon: 'lucideCompass' },
];
