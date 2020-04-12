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

import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { Adicionar } from 'src/app/modules/core/consts/action.const';
import { StatusHttp } from 'src/app/shared/enuns/status-http.enum';
import { MensagemEnum } from 'src/app/shared/enuns/mensagem.enum';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {

  username = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private gitHubService: GithubService,
    private store: Store<UsuarioGitHub>,
    private router: Router
  ) { }

  limparPesquisa() {
    this.username.reset();
  }

  pesquisarUsuario() {
    if (this.username.valid) {
      this.gitHubService.buscarUsuario(this.username.value)
        .subscribe(async resposta => {
          console.log(resposta);
          await this.store.dispatch(Adicionar(resposta));
          this.router.navigate(['resultado']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === StatusHttp.NOT_FOUND) {
            alert(MensagemEnum.USUARIO_NAO_ENCONTRADO);
          }
        });
    } else {
      this.username.markAsTouched();
    }
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && (this.username.touched || this.username.dirty);
  }

  verificarMensagem(erro: string) {
    return this.username.hasError(erro) && (this.username.touched || this.username.dirty);
  }

}
