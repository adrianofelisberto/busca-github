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

import { Component, OnInit, Attribute } from '@angular/core';

import { NavegacaoService } from 'src/app/shared/shared-service/services/navegacao.service';

@Component({
  selector: 'app-erro-content',
  templateUrl: './erro-content.component.html',
  styleUrls: ['./erro-content.component.scss']
})
export class ErroContentComponent implements OnInit {
  tituloErro: string;
  constructor(
    @Attribute('erro') public erro: number,
    @Attribute('mensagemErro') public mensagemErro: string,
    private navegacaoService: NavegacaoService
  ) {}

  ngOnInit(): void {
    this.tituloErro = `Erro ${this.erro}`;
  }

  voltarInicio() {
    this.navegacaoService.paginaInicial();
  }

}
