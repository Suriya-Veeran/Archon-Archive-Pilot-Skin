/** Profile purpose: which product mode the user is working in. */
export type Profile = 'live' | 'decom';

export const PROFILES: { id: Profile; label: string; home: string }[] = [
  { id: 'live', label: 'Live', home: '/live' },
  { id: 'decom', label: 'Decommission', home: '/decom' },
];
