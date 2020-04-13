/***************************************************************************************************
 * This program search an user from GitHub
 * Copyright (C) 2020 Adriano Araújo Felisberto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see [http://www.gnu.org/licenses/].
 */

import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SharedServiceModule } from 'src/app/shared/shared-service/shared-service.module';
import { HttpInterceptorService } from './http-interceptor.service';
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
