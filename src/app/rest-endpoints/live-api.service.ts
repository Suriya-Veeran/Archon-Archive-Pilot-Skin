import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ENDPOINTS } from './endpoints';

/** LIVE profile calls. Add one method per endpoint. */
@Injectable({ providedIn: 'root' })
export class LiveApiService {
  private readonly api = inject(ApiService);

  overview<T>() {
    return this.api.get<T>(ENDPOINTS.live.overview);
  }

  job<T>(id: string) {
    return this.api.get<T>(ENDPOINTS.live.job(id));
  }
}
