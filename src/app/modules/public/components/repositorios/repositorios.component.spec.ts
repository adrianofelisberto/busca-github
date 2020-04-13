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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { SharedServiceModule } from 'src/app/shared/shared-service/shared-service.module';
import { ResultadoBuscaComponent } from '../resultado-busca/resultado-busca.component';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { RepositoriosComponent } from './repositorios.component';
import { GithubService } from '../../services/github.service';
import { REPOSITORIO } from 'src/app/shared/consts/teste.mock';

describe('RepositoriosComponent', () => {
  let component: RepositoriosComponent;
  let fixture: ComponentFixture<RepositoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepositoriosComponent,
        PesquisaComponent,
        ResultadoBuscaComponent,
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        SharedComponentsModule,
        ReactiveFormsModule,
        SharedServiceModule,
        RouterTestingModule.withRoutes([
          {
            path: '', component: PesquisaComponent
          },
          {
            path: ':username', component: ResultadoBuscaComponent
          },
        ])
      ],
      providers: [
        GithubService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve filtrar a lista de repositórios', () => {
    component.repositorios = new Array(REPOSITORIO);
    component.filtrarLista('teste');
    expect(component.repositoriosFiltrados.length).toBe(0);
  });

  it('deve copiar uma lista ordenada', () => {
    component.repositorios = [
      { stargazers_count: 1, description: '', html_url: '', name: '', updated_at: '' },
      { stargazers_count: 3, description: '', html_url: '', name: '', updated_at: '' },
      { stargazers_count: 2, description: '', html_url: '', name: '', updated_at: '' },
      { stargazers_count: 10, description: '', html_url: '', name: '', updated_at: '' },
      { stargazers_count: 1, description: '', html_url: '', name: '', updated_at: '' },
    ];
    const listaOrdenada = component.copiarListaOrdenada();
    expect(listaOrdenada[0].stargazers_count).toBe(10);
    expect(listaOrdenada.length).toBe(component.repositorios.length);
  });
});
