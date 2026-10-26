import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideCore } from '@core/providers';
import { provideArchonShared } from '@shared';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideCore(),
    // app-wide defaults for shared components (override per module/page with the same function)
    provideArchonShared({ format: { locale: 'en-US' } }),
  ],
};
