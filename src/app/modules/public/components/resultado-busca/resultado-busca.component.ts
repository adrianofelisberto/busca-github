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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { Limpar, Adicionar } from 'src/app/modules/core/consts/action.const';
import { PesquisaUsuario } from '../../classes/pesquisa-usuario.abstract';
import { GithubService } from '../../services/github.service';
import { NavegacaoService } from 'src/app/shared/shared-service/services/navegacao.service';
import { MensagemService } from 'src/app/shared/shared-service/services/mensagem.service';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent extends PesquisaUsuario implements OnInit, OnDestroy {

  usuario: UsuarioGitHub;

  constructor(
    private store: Store<UsuarioGitHub>,
    protected mensagemService: MensagemService,
    private route: ActivatedRoute,
    protected gitHubService: GithubService,
    private navegacaoService: NavegacaoService
  ) {
    super(gitHubService, mensagemService);
  }

  ngOnInit(): void {
    this.store.pipe(
      map((valor: any) => {
        if (valor.usuario) {
          return valor.usuario;
        }
        // this.router.navigate(['/']);
      })
    ).subscribe((usuario: UsuarioGitHub) => {
      this.verificarAcao(usuario);
    });
  }

  verificarAcao(usuario) {
    if (usuario) {
      this.usuario = usuario;
    } else {
      this.buscarUsuarioPorParametro();
    }
  }

  buscarUsuarioPorParametro() {
    this.route.paramMap.subscribe(params => {
      const username: string = params.get('username');
      if (username) {
        this.pesquisarUsuario(username);
      } else {
        this.voltarPesquisa();
      }
    });
  }

  funcaoSubscribe(resposta: UsuarioGitHub) {
    this.store.dispatch(Adicionar(resposta));
  }

  ngOnDestroy() {
    this.store.dispatch(Limpar());
  }

  voltarPesquisa() {
    this.navegacaoService.paginaInicial();
  }

  visualizarRepositorios() {
    this.navegacaoService.visualizarRepositorios(this.usuario.login);
  }

}
