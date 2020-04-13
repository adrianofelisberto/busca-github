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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImagemOctocatComponent } from './components/imagem-octocat/imagem-octocat.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { BotaoComponent } from './components/botao/botao.component';
import { BotoesComponent } from './components/botoes/botoes.component';



@NgModule({
  declarations: [
    ImagemOctocatComponent,
    BotaoComponent,
    TituloComponent,
    CardContentComponent,
    BotoesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagemOctocatComponent,
    BotaoComponent,
    TituloComponent,
    CardContentComponent,
    BotoesComponent,
  ]
})
export class SharedComponentsModule { }
