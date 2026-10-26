export type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

/** New object: `base` with `patch` merged in (nested objects merged, arrays replaced). */
export function mergeDeep<T>(base: T, patch: DeepPartial<T> | undefined): T {
  if (!patch) return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(patch)) {
    if (v === undefined) continue;
    const cur = out[k];
    const nested =
      typeof v === 'object' &&
      v !== null &&
      !Array.isArray(v) &&
      typeof cur === 'object' &&
      cur !== null;
    out[k] = nested ? mergeDeep(cur, v) : v;
  }
  return out as T;
}
