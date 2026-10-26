/** Profile purpose: LIVE or DECOM. */
export type Profile = 'live' | 'decom';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
