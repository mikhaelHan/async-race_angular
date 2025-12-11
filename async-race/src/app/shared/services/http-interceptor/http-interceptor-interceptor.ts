import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '@app/environment';

export const httpInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const clonedRequest: HttpRequest<unknown> = request.clone({
    url: `${environment.URL}${request.url}`,
  });

  return next(clonedRequest);
};
