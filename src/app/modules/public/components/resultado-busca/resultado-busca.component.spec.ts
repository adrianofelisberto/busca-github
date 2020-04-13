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

import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { RepositoriosComponent } from '../repositorios/repositorios.component';
import { ResultadoBuscaComponent } from './resultado-busca.component';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { USUARIO_GITHUB } from 'src/app/shared/consts/teste.mock';
import { CoreModule } from 'src/app/modules/core/core.module';
import { GithubService } from '../../services/github.service';

describe('ResultadoBuscaComponent', () => {
  let component: ResultadoBuscaComponent;
  let fixture: ComponentFixture<ResultadoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultadoBuscaComponent,
        PesquisaComponent,
        RepositoriosComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        CoreModule,
        SharedComponentsModule,
        RouterTestingModule.withRoutes([
          {path: '', component: PesquisaComponent},
          {path: ':username/repositorios', component: RepositoriosComponent},
        ])
      ],
      providers: [
        GithubService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve voltar para tela de pesquisa', () => {
    component.voltarPesquisa();
  });

  it('deve salvar o usuário no store do redux', () => {
    component.funcaoSubscribe(USUARIO_GITHUB);
    component.ngOnInit();
    expect(component.usuario).toBeDefined();
  });

  it('deve limpar o store do redux', () => {
    component.ngOnDestroy();
    expect(component.usuario).toBeUndefined();
  });

  it('deve navegar para os repositórios', () => {
    component.usuario = USUARIO_GITHUB;
    component.visualizarRepositorios();
  });

});
