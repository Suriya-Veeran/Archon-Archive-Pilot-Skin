import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { authInterceptor } from '@auth/interceptors/auth.interceptor';
import { provideSpartanHlm } from '@spartan-ng/helm/utils';
import { errorInterceptor } from './interceptors/error.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';

/** Everything the app needs once: HTTP + interceptors and Spartan defaults. */
export function provideCore(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor, errorInterceptor])),
    provideSpartanHlm(),
  ]);
}
