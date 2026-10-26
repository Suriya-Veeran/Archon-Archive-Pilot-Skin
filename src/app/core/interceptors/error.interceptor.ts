import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

/** 401 -> sign out; 5xx / network -> toast. The error is always re-thrown to the caller. */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const notify = inject(NotificationService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) auth.logout();
      else if (err.status === 0 || err.status >= 500)
        notify.error('Something went wrong', err.message);
      return throwError(() => err);
    }),
  );
};
