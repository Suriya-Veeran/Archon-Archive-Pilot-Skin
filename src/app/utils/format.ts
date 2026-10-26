/** 1536 -> "1.5 KB" */
export function formatBytes(bytes: number | null | undefined, digits = 1): string {
  if (bytes == null || isNaN(bytes)) return '—';
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let i = 0;
  let v = bytes;
  while (Math.abs(v) >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(i === 0 ? 0 : digits)} ${units[i]}`;
}

/** 1234567 -> "1,234,567" */
export function formatNumber(
  value: number | null | undefined,
  locale = 'en-US',
  digits = 0,
): string {
  if (value == null || isNaN(value)) return '—';
  return new Intl.NumberFormat(locale, { maximumFractionDigits: digits }).format(value);
}

/** 1234567 -> "1.2M" */
export function formatCompact(value: number | null | undefined, locale = 'en-US'): string {
  if (value == null || isNaN(value)) return '—';
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(
    value,
  );
}

/** 0.423 -> "42.3%" */
export function formatPercent(ratio: number | null | undefined, digits = 1): string {
  if (ratio == null || isNaN(ratio)) return '—';
  return `${(ratio * 100).toFixed(digits)}%`;
}

export function formatDate(
  value: string | number | Date | null | undefined,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' },
): string {
  if (value == null || value === '') return '—';
  const d = value instanceof Date ? value : new Date(value);
  return isNaN(d.getTime()) ? '—' : new Intl.DateTimeFormat(locale, options).format(d);
}
