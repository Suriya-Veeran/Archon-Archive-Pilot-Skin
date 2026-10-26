export interface CsvColumn {
  key: string;
  header: string;
}

/** Rows -> CSV text (RFC 4180 quoting). */
export function toCsv(columns: readonly CsvColumn[], rows: readonly object[]): string {
  const esc = (v: unknown) => {
    const s = v == null ? '' : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const head = columns.map((c) => esc(c.header)).join(',');
  const body = rows.map((r) =>
    columns.map((c) => esc((r as Record<string, unknown>)[c.key])).join(','),
  );
  return [head, ...body].join('\n');
}

/** Triggers a browser download of text or a Blob. */
export function downloadFile(fileName: string, data: string | Blob, type = 'text/plain'): void {
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}
