import { inject, InjectionToken, Provider } from '@angular/core';
import { DeepPartial, mergeDeep } from '@utils/object';

/**
 * Defaults for every shared component.
 *
 * Customise at any level - the closest provider wins and is merged over its parent:
 *   app.config.ts      providers: [provideArchonShared({ format: { locale: 'de-DE' } })]
 *   a route            providers: [provideArchonShared({ table: { pageSize: 50 } })]
 *   one component      providers: [provideArchonShared({ table: { dense: true } })]
 * and per instance with inputs, e.g. <archon-static-table [pageSize]="10">.
 */
export interface ArchonSharedConfig {
  table: { pageSize: number; emptyText: string; dense: boolean; striped: boolean };
  dialog: { cancelText: string; confirmText: string; width: string };
  stepper: { backText: string; nextText: string; finishText: string };
  format: { locale: string; currency: string; date: Intl.DateTimeFormatOptions };
}

export const ARCHON_SHARED_DEFAULTS: ArchonSharedConfig = {
  table: { pageSize: 25, emptyText: 'No data', dense: false, striped: false },
  dialog: { cancelText: 'Cancel', confirmText: 'Save', width: 'sm:max-w-lg' },
  stepper: { backText: 'Back', nextText: 'Next', finishText: 'Finish' },
  format: {
    locale: 'en-US',
    currency: 'USD',
    date: { year: 'numeric', month: 'short', day: '2-digit' },
  },
};

export const ARCHON_SHARED_CONFIG = new InjectionToken<ArchonSharedConfig>('ARCHON_SHARED_CONFIG', {
  providedIn: 'root',
  factory: () => ARCHON_SHARED_DEFAULTS,
});

export function provideArchonShared(overrides: DeepPartial<ArchonSharedConfig>): Provider {
  return {
    provide: ARCHON_SHARED_CONFIG,
    useFactory: () => {
      const parent =
        inject(ARCHON_SHARED_CONFIG, { skipSelf: true, optional: true }) ?? ARCHON_SHARED_DEFAULTS;
      return mergeDeep(parent, overrides);
    },
  };
}

export const injectArchonConfig = (): ArchonSharedConfig => inject(ARCHON_SHARED_CONFIG);
