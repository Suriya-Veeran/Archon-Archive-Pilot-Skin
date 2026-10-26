export type Primitive = string | number | boolean | Date | null | undefined;

/** Null-safe compare: nulls always last, numbers numerically, strings with localeCompare. */
export function compareValues(a: Primitive, b: Primitive): number {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
}

export function sortBy<T>(
  rows: readonly T[],
  pick: (row: T) => Primitive,
  direction: 'asc' | 'desc' = 'asc',
): T[] {
  const dir = direction === 'asc' ? 1 : -1;
  return [...rows].sort((x, y) => compareValues(pick(x), pick(y)) * dir);
}
