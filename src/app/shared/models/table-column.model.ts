export type CellAlign = 'left' | 'right' | 'center';

export interface TableColumn<T = Record<string, unknown>> {
  /** Property of the row to read, or a unique id when `value` is given. */
  key: string;
  header: string;
  align?: CellAlign;
  sortable?: boolean;
  /** Custom cell text; defaults to row[key]. For markup use <ng-template archonCell="key">. */
  value?: (row: T) => string | number | null | undefined;
}

export type SortDirection = 'asc' | 'desc';

export interface SortState {
  key: string;
  direction: SortDirection;
}
