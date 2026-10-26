export interface TableColumn<T = Record<string, unknown>> {
  /** Property of the row to show (or a unique id when `value` is given). */
  key: string;
  header: string;
  align?: 'left' | 'right';
  /** Custom cell text; for markup use <ng-template archonCell="key">. */
  value?: (row: T) => string | number | null | undefined;
}
