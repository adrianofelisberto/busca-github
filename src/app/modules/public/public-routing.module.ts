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

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ResultadoBuscaComponent } from './components/resultado-busca/resultado-busca.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisa',
    pathMatch: 'full'
  },
  {
    path: 'pesquisa',
    children: [
      {
        path: '',
        component: PesquisaComponent,
      },
      {
        path: ':username',
        children: [
          {
            path: '',
            component: ResultadoBuscaComponent
          },
          {
            path: 'repositorios',
            component: RepositoriosComponent
          }
        ]
      },
    ]
  },
  {
    path: 'erro',
    loadChildren: () => import('./modules/erro/erro.module').then(module => module.ErroModule),
  },
  {
    path: '**',
    redirectTo: 'erro'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
