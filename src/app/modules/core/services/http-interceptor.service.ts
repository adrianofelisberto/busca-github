import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { StatusHttp } from 'src/app/shared/enuns/status-http.enum';
import { MensagemService } from 'src/app/shared/shared-service/services/mensagem.service';
import { AppMensagem } from 'src/app/shared/consts/app-mensagem.const';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private mensagemService: MensagemService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor');
    return next.handle(request).pipe(
      map((event) => {
        return event;
      }),
      catchError((error) => {
        return this.errorHandler(error);
      })
    );
  }

  errorHandler(error: any) {
    switch (error.status) {
      case StatusHttp.BAD_REQUEST:
        this.mensagemService.mostrarMensagemAviso(AppMensagem.BAD_REQUEST);
        break;
      case StatusHttp.INTERNAL_SERVER_ERROR:
      case StatusHttp.GATEWAY_TIMEOUT:
      case StatusHttp.FORBIDDEN:
        this.mensagemService.mostrarMensagemAviso(error.message);
        break;
    }
    return throwError(error);
  }
}
