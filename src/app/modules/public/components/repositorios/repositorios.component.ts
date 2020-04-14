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

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { startWith, map, debounceTime } from 'rxjs/operators';

import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { GithubService } from '../../services/github.service';
import { Repositorio } from '../../models/repositorio.model';
import { ActivatedRoute } from '@angular/router';
import { ListaUtil } from '../../utils/lista.util';
import { NavegacaoService } from 'src/app/shared/shared-service/services/navegacao.service';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {

  campoFiltro = new FormControl();

  username: string;

  repositorios = new Array<Repositorio>();
  repositoriosFiltrados: Array<Repositorio>;

  constructor(
    private route: ActivatedRoute,
    private gitHubService: GithubService,
    private navegacaoService: NavegacaoService,
  ) { }

  ngOnInit(): void {
    this.buscarUsuarioPorRota();
    this.iniciarObservableFiltro();
  }

  buscarUsuarioPorRota() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      this.buscarRespositorios();
    });
  }

  /**
   * Inicia a verificação de mudança no formControl
   */
  iniciarObservableFiltro() {
    this.campoFiltro.valueChanges.pipe(
      debounceTime(200),
      startWith(''),
      map(nome => {
        return nome ? this.filtrarLista(nome) : this.copiarListaOrdenada();
      }
    )).subscribe((listaFiltrada: Array<Repositorio>) => {
      this.repositoriosFiltrados = listaFiltrada;
    });
  }

  filtrarLista(valor: string): Repositorio[] {
    return this.repositorios.filter(repositorio => {
      return repositorio.name.toLowerCase().includes(valor.trim().toLowerCase());
    });
  }

  buscarRespositorios() {
    this.gitHubService.buscarRepositorios(this.username)
      .subscribe((repositorios: Repositorio[]) => {
        this.repositorios = repositorios;
        this.repositoriosFiltrados = this.copiarListaOrdenada();
      });
  }

  copiarListaOrdenada(): Array<Repositorio> {
    return this.repositorios.slice().sort(ListaUtil.ordenarListaPorEstrela);
  }

  voltarResultado() {
    this.navegacaoService.resultadoBusca(this.username);
  }

  voltarInicio() {
    this.navegacaoService.paginaInicial();
  }

}
