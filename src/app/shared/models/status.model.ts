/** Reserved status set. Always shown as icon + label, never colour alone. */
export type Status = 'good' | 'warning' | 'critical' | 'info' | 'neutral';

export interface Step {
  key: string;
  label: string;
  description?: string;
}
