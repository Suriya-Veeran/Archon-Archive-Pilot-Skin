const UPPER = new Set(['kpi', 'db', 'sap', 'ads', 'csv', 'pdf', 'id', 'url', 'sso']);

/** "kpi-row-efficiency" -> "KPI row efficiency" */
export function humanize(value: string): string {
  const words = value.replace(/[_-]+/g, ' ').trim().split(/\s+/);
  return words
    .map((w, i) =>
      UPPER.has(w.toLowerCase()) ? w.toUpperCase() : i === 0 ? w[0].toUpperCase() + w.slice(1) : w,
    )
    .join(' ');
}

/** "Suriya Aravind" -> "SA" */
export function initials(name: string | null | undefined, max = 2): string {
  return (name ?? '?')
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .join('')
    .slice(0, max)
    .toUpperCase();
}
