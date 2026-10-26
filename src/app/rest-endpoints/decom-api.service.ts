import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, QueryParams } from './api.service';
import { ENDPOINTS } from './endpoints';

const E = ENDPOINTS.decom;

/** DECOM profile API. Response types are generic until the backend contracts are fixed. */
@Injectable({ providedIn: 'root' })
export class DecomApiService {
  private readonly api = inject(ApiService);

  overview<T>(): Observable<T> {
    return this.api.get<T>(E.overview);
  }
  businessArea<T>(): Observable<T> {
    return this.api.get<T>(E.businessArea);
  }
  tcodes<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.tcodes, params);
  }
  security<T>(): Observable<T> {
    return this.api.get<T>(E.security);
  }
  dashboards<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.dashboards, params);
  }
  archiveReport<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.archiveReport, params);
  }
  plan<T>(): Observable<T> {
    return this.api.get<T>(E.plan);
  }
  savePlan<T>(body: unknown): Observable<T> {
    return this.api.put<T>(E.plan, body);
  }
  runs<T>(): Observable<T> {
    return this.api.get<T>(E.runs);
  }
  run<T>(id: string): Observable<T> {
    return this.api.get<T>(E.run(id));
  }
  metadata<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.metadata, params);
  }
  relationships<T>(params?: QueryParams): Observable<T> {
    return this.api.get<T>(E.relationships, params);
  }
}
