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

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { MensagemService } from 'src/app/shared/shared-service/services/mensagem.service';
import { StatusHttp } from 'src/app/shared/enuns/status-http.enum';
import { AppMensagem } from 'src/app/shared/consts/app-mensagem.const';
import { NavegacaoService } from 'src/app/shared/shared-service/services/navegacao.service';
import { LoaderService } from 'src/app/shared/shared-service/services/loader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private mensagemService: MensagemService,
    private navegacaoService: NavegacaoService,
    private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.mostrar();
    return next.handle(request).pipe(
      map((event) => {
        return event;
      }),
      catchError((error) => {
        return this.errorHandler(error);
      }),
      finalize(() => this.loaderService.ocultar())
    );
  }

  errorHandler(error: any) {
    switch (error.status) {
      case StatusHttp.BAD_REQUEST:
        this.mensagemService.mostrarMensagemAviso(AppMensagem.BAD_REQUEST);
        break;
      case StatusHttp.INTERNAL_SERVER_ERROR:
        this.mensagemService.mostrarMensagemErro(AppMensagem.ERROR_SERVIDOR);
        this.navegacaoService.direcionarPaginaErroServidor();
        break;
      case StatusHttp.GATEWAY_TIMEOUT:
        this.mensagemService.mostrarMensagemErro(AppMensagem.GETWAY_TIMEOUT);
        this.navegacaoService.direcionarPaginaErroServidor();
        break;
      case StatusHttp.FORBIDDEN:
        this.mensagemService.mostrarMensagemAviso(AppMensagem.FORBIDDEN);
        break;
    }
    return throwError(error);
  }
}
