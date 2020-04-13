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

import { GithubService } from '../services/github.service';
import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusHttp } from 'src/app/shared/enuns/status-http.enum';
import { MensagemService } from 'src/app/shared/shared-service/services/mensagem.service';
import { AppMensagem } from 'src/app/shared/consts/app-mensagem.const';

export abstract class PesquisaUsuario {
  constructor(
    protected gitHubService: GithubService,
    protected mensagemService: MensagemService,
  ) {}

  abstract funcaoSubscribe(resposta: UsuarioGitHub);
  redirecionarUsuario() {}

  pesquisarUsuario(username: string) {
    this.gitHubService.buscarUsuario(username)
      .subscribe(async (resposta: UsuarioGitHub) => {
        this.funcaoSubscribe(resposta);
      },
      (erro: HttpErrorResponse) => {
        if (erro.status === StatusHttp.NOT_FOUND) {
          this.mensagemService.mostrarMensagemErro(AppMensagem.USUARIO_NAO_ENCONTRADO);
          this.redirecionarUsuario();
        }
      }
    );
  }
}
