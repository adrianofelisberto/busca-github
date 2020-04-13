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
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { Adicionar } from 'src/app/modules/core/consts/action.const';
import { GithubService } from '../../services/github.service';
import { PesquisaUsuario } from '../../classes/pesquisa-usuario.abstract';
import { NavegacaoService } from 'src/app/shared/shared-service/services/navegacao.service';
import { MensagemService } from 'src/app/shared/shared-service/services/mensagem.service';
import { InteracaoUsuario } from '../../utils/interacao-usuario.util';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent extends PesquisaUsuario {

  username = new FormControl(null, [Validators.required, Validators.pattern((/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i))]);

  constructor(
    protected gitHubService: GithubService,
    private store: Store<UsuarioGitHub>,
    private navegacaoService: NavegacaoService,
    protected mensagemService: MensagemService,
  ) {
    super(
      gitHubService,
      mensagemService
    );
  }

  limparPesquisa() {
    this.username.reset();
  }

  pesquisar() {
    if (this.username.valid) {
      this.pesquisarUsuario(this.username.value);
    } else {
      this.username.markAsTouched();
    }
  }

  digitacaoUsuario(event: KeyboardEvent) {
    if (InteracaoUsuario.possuiEspaco(event)) {
      return;
    }
  }

  funcaoSubscribe(resposta: UsuarioGitHub) {
    this.store.dispatch(Adicionar(resposta));
    this.navegacaoService.resultadoBusca(this.username.value);
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && this.houveInteracaoUsuario();
  }

  verificarMensagem(erro: string) {
    return this.username.hasError(erro) && this.houveInteracaoUsuario();
  }

  houveInteracaoUsuario() {
    return this.username.touched || this.username.dirty;
  }

}
