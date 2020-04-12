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

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { ResultadoBuscaComponent } from './components/resultado-busca/resultado-busca.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { PublicRoutingModule } from './public-routing.module';
import { GithubService } from './services/github.service';


@NgModule({
  declarations: [
    PesquisaComponent,
    ResultadoBuscaComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  providers: [
    GithubService
  ]
})
export class PublicModule { }
