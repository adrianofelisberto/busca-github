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
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { Adicionar } from 'src/app/modules/core/consts/action.const';
import { GithubService } from '../../services/github.service';
import { PesquisaUsuario } from '../../classes/pesquisa-usuario.abstract';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent extends PesquisaUsuario {

  username = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    protected gitHubService: GithubService,
    private store: Store<UsuarioGitHub>,
    private router: Router
  ) {
    super(gitHubService);
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

  funcaoSubscribe(resposta: UsuarioGitHub) {
    this.store.dispatch(Adicionar(resposta));
    this.router.navigate([`/pesquisa/${this.username.value}`]);
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && (this.username.touched || this.username.dirty);
  }

  verificarMensagem(erro: string) {
    return this.username.hasError(erro) && (this.username.touched || this.username.dirty);
  }

}
