import { HttpInterceptorFn } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { httpInterceptor } from './http-interceptor-interceptor';

describe('httpInterceptorInterceptor', () => {
  const interceptor: HttpInterceptorFn = (request, next) => TestBed.runInInjectionContext(() => httpInterceptor(request, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
