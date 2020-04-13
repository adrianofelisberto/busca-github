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

import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { ResultadoBuscaComponent } from 'src/app/modules/public/components/resultado-busca/resultado-busca.component';
import { RepositoriosComponent } from 'src/app/modules/public/components/repositorios/repositorios.component';
import { PesquisaComponent } from 'src/app/modules/public/components/pesquisa/pesquisa.component';
import { NavegacaoService } from './navegacao.service';

describe('NavegacaoService', () => {
  let service: NavegacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
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
              }]
            }
        ])
      ],
      providers: [
        NavegacaoService
      ]
    });
    service = TestBed.inject(NavegacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
