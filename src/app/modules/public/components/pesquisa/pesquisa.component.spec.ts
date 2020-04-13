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

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';

import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { SharedServiceModule } from 'src/app/shared/shared-service/shared-service.module';
import { ResultadoBuscaComponent } from '../resultado-busca/resultado-busca.component';
import { USUARIO } from '../../../../shared/consts/teste.mock';
import { GithubService } from '../../services/github.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'src/app/modules/core/core.module';
import { environment } from 'src/environments/environment';
import { PesquisaComponent } from './pesquisa.component';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;

  let httpClientSpy: { get: jasmine.Spy };
  let httpTestingController: HttpTestingController;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        PesquisaComponent,
        ResultadoBuscaComponent,
      ],
      imports: [
        HttpClientTestingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        SharedServiceModule,
        RouterTestingModule.withRoutes(
          [{path: 'pesquisa/:username', component: ResultadoBuscaComponent}]
        )
      ],
      providers: [
        GithubService,
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve limpar campo de usuário', () => {
    component.username.setValue('usuarioMocado');
    expect(component.username.value).toBeDefined();
    component.limparPesquisa();
    expect(component.username.value).toBeNull();
  });

  it('deve buscar o usuário pelo login quando formControl válido', async(inject([GithubService], (service) => {

    component.username.setValue('adrianofelisberto');
    expect(component.username.valid).toBeTruthy();
    component.pesquisar();
    const request: any = httpTestingController.expectOne(`${environment.apiUrl}/users/adrianofelisberto`);
    request.flush(USUARIO);

    component.pesquisarUsuario('adrianofelisberto');
  })));

  it('não deve chamar o serviço de busca', () => {
    component.pesquisarUsuario('adrianofelisberto');
  });


  it('deve retornar um erro 404', async(inject([GithubService], (service) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    component.username.setValue('teste');
    service.buscarUsuario().subscribe(
      usuarios => fail('esperado erro 404, não usuarios'),
      error  => expect(error.message).toContain('test 404 error')
    );
    component.pesquisarUsuario('adrianofelisberto');
  })));

  it('deve marcar o formControl quando estiver inválido', () => {
    component.pesquisar();
    expect(component.username.invalid).toBeTruthy();
    expect(component.username.touched).toBeTruthy();
  });

});
