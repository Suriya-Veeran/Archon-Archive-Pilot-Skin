import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, QueryParams } from './api.service';
import { ENDPOINTS } from './endpoints';

const E = ENDPOINTS.live;

/** LIVE profile API. Response types are generic until the backend contracts are fixed. */
@Injectable({ providedIn: 'root' })
export class LiveApiService {
  private readonly api = inject(ApiService);

  overview<T>(): Observable<T> {
    return this.api.get<T>(E.overview);
  }
  dashboard<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.dashboard, params);
  }
  report<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.report, params);
  }
  exportReport(format: 'csv' | 'pdf', params?: QueryParams): Observable<Blob> {
    return this.api.getBlob(E.reportExport(format), params);
  }
  objects<T>(): Observable<T> {
    return this.api.get<T>(E.objects);
  }
  object<T>(id: string): Observable<T> {
    return this.api.get<T>(E.object(id));
  }
  variants<T>(objectId: string): Observable<T> {
    return this.api.get<T>(E.variants(objectId));
  }
  jobs<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.jobs, params);
  }
  job<T>(id: string): Observable<T> {
    return this.api.get<T>(E.job(id));
  }
  jobLog<T>(id: string): Observable<T> {
    return this.api.get<T>(E.jobLog(id));
  }
  sapJobs<T>(): Observable<T> {
    return this.api.get<T>(E.sapJobs);
  }
}
