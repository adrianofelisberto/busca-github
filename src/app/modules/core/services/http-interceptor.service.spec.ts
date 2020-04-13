import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor.service';
import { SharedServiceModule } from 'src/app/shared/shared-service/shared-service.module';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusHttp } from 'src/app/shared/enuns/status-http.enum';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedServiceModule
      ],
      providers: [
        HttpInterceptorService
      ]
    });
    service = TestBed.inject(HttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testar tratamento de erro Bad Request', () => {
    const teste: HttpErrorResponse = {status: StatusHttp.BAD_REQUEST} as HttpErrorResponse;
    service.errorHandler(teste).subscribe(() => {
      fail();
    },
    (error: HttpErrorResponse) => {
      expect(error.status).toBe(StatusHttp.BAD_REQUEST);
    });
  });

  it('testar tratamento de erro Forbidden', () => {
    const teste: HttpErrorResponse = {status: StatusHttp.FORBIDDEN} as HttpErrorResponse;
    service.errorHandler(teste).subscribe(() => {
      fail();
    },
    (error: HttpErrorResponse) => {
      expect(error.status).toBe(StatusHttp.FORBIDDEN);
    });
  });

  it('testar tratamento de erro Timeout', () => {
    const teste: HttpErrorResponse = {status: StatusHttp.GATEWAY_TIMEOUT} as HttpErrorResponse;
    service.errorHandler(teste).subscribe(() => {
      fail();
    },
    (error: HttpErrorResponse) => {
      expect(error.status).toBe(StatusHttp.GATEWAY_TIMEOUT);
    });
  });

  it('testar tratamento de erro Servidor', () => {
    const teste: HttpErrorResponse = {status: StatusHttp.INTERNAL_SERVER_ERROR} as HttpErrorResponse;
    service.errorHandler(teste).subscribe(() => {
      fail();
    },
    (error: HttpErrorResponse) => {
      expect(error.status).toBe(StatusHttp.INTERNAL_SERVER_ERROR);
    });
  });
});
