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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroRoutingModule } from './erro-routing.module';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { ErroContentComponent } from './components/erro-content/erro-content.component';
import { ErroServidorComponent } from './components/erro-servidor/erro-servidor.component';

@NgModule({
  declarations: [
    PaginaNaoEncontradaComponent,
    ErroContentComponent,
    ErroServidorComponent
  ],
  imports: [
    CommonModule,
    ErroRoutingModule,
    SharedComponentsModule
  ]
})
export class ErroModule { }
