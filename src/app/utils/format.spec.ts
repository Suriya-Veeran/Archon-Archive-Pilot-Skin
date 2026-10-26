import { formatBytes, formatPercent } from './format';
import { mergeDeep } from './object';
import { humanize } from './string';

describe('utils', () => {
  it('formats bytes', () => {
    expect(formatBytes(1536)).toBe('1.5 KB');
    expect(formatBytes(null)).toBe('—');
  });

  it('formats percent', () => {
    expect(formatPercent(0.423)).toBe('42.3%');
  });

  it('humanizes ids', () => {
    expect(humanize('kpi-row-efficiency')).toBe('KPI row efficiency');
  });

  it('deep-merges config', () => {
    const base = { table: { pageSize: 25, dense: false }, x: 1 };
    expect(mergeDeep(base, { table: { pageSize: 50 } })).toEqual({
      table: { pageSize: 50, dense: false },
      x: 1,
    });
  });
});
