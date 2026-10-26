import { inject, InjectionToken, Provider } from '@angular/core';
import { DeepPartial, mergeDeep } from '@utils/object';

/**
 * Defaults for the shared components. Customise at any level - the closest provider wins:
 *   app.config.ts   providers: [provideArchonShared({ table: { pageSize: 50 } })]
 *   a route         providers: [provideArchonShared({ table: { emptyText: 'No jobs' } })]
 *   one component   providers: [provideArchonShared({ dialog: { confirmText: 'Apply' } })]
 * and per instance with inputs, e.g. <archon-table [pageSize]="10">.
 */
export interface ArchonSharedConfig {
  table: { pageSize: number; emptyText: string };
  dialog: { confirmText: string; cancelText: string };
}

export const ARCHON_SHARED_DEFAULTS: ArchonSharedConfig = {
  table: { pageSize: 25, emptyText: 'No data' },
  dialog: { confirmText: 'Save', cancelText: 'Cancel' },
};

export const ARCHON_SHARED_CONFIG = new InjectionToken<ArchonSharedConfig>('ARCHON_SHARED_CONFIG', {
  providedIn: 'root',
  factory: () => ARCHON_SHARED_DEFAULTS,
});

export function provideArchonShared(overrides: DeepPartial<ArchonSharedConfig>): Provider {
  return {
    provide: ARCHON_SHARED_CONFIG,
    useFactory: () =>
      mergeDeep(
        inject(ARCHON_SHARED_CONFIG, { skipSelf: true, optional: true }) ?? ARCHON_SHARED_DEFAULTS,
        overrides,
      ),
  };
}
