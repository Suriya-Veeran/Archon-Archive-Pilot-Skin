/** 1536 -> "1.5 KB" */
export function formatBytes(bytes: number | null | undefined, digits = 1): string {
  if (bytes == null || isNaN(bytes)) return '—';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let v = bytes;
  while (Math.abs(v) >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(i === 0 ? 0 : digits)} ${units[i]}`;
}

/** 1234567 -> "1,234,567" */
export function formatNumber(value: number | null | undefined, locale = 'en-US'): string {
  return value == null || isNaN(value) ? '—' : new Intl.NumberFormat(locale).format(value);
}
