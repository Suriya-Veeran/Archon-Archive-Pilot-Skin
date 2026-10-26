import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ENDPOINTS } from './endpoints';

/** DECOM profile calls. Add one method per endpoint. */
@Injectable({ providedIn: 'root' })
export class DecomApiService {
  private readonly api = inject(ApiService);

  overview<T>() {
    return this.api.get<T>(ENDPOINTS.decom.overview);
  }

  run<T>(id: string) {
    return this.api.get<T>(ENDPOINTS.decom.run(id));
  }
}
