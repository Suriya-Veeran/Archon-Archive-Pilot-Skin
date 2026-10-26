import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { authInterceptor } from '@auth/auth.interceptor';
import { provideSpartanHlm } from '@spartan-ng/helm/utils';
import { errorInterceptor } from './interceptors/error.interceptor';

/** App-wide providers, registered once in app.config.ts. */
export function provideCore(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    provideSpartanHlm(),
  ]);
}
