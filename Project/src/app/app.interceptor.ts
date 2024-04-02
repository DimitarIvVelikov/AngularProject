import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  API = '/api';
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith(this.API)) {
      request = request.clone({
        url: request.url.replace(this.API, environment.baseURL),
        withCredentials: true,
      });
    }
    console.log(request);

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 400) {
          this.router.navigate(['/login']);
        }

        console.log(error.message, error.status);

        return [error];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
