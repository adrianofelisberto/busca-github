import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PesquisaComponent } from './pesquisa.component';
import { GithubService } from '../../services/github.service';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { USUARIO } from '../../services/usuario.mock';
import { UsuarioGitHub } from '../../../../shared/shared-models/models/usuario-github.model';
import { CoreModule } from 'src/app/modules/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultadoBuscaComponent } from '../resultado-busca/resultado-busca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;

  let httpClientSpy: { get: jasmine.Spy };
  let httpTestingController: HttpTestingController;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        PesquisaComponent,
        ResultadoBuscaComponent
      ],
      imports: [
        HttpClientTestingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [{path: 'resultado', component: ResultadoBuscaComponent}]
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

  it('deve buscar o usuário pelo login', async(inject([GithubService], (service) => {

    component.username.setValue('adrianofelisberto');
    service.buscarUsuario('adrianofelisberto').subscribe((usuario: UsuarioGitHub) => {
      expect(usuario).toBeDefined();
    });
    const request: any = httpTestingController.expectOne(`${environment.apiUrl}/users/adrianofelisberto`);
    request.flush(USUARIO);

    component.pesquisarUsuario();
  })));

  it('não deve chamar o serviço de busca', () => {
    component.pesquisarUsuario();
  });


  it('deve retornar um erro 404', async(inject([GithubService], (service) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    component.username.setValue('teste');
    // service.buscarUsuario().subscribe(
    //   usuarios => fail('esperado erro 404, não usuarios'),
    //   error  => expect(error.message).toContain('test 404 error')
    // );
    component.pesquisarUsuario();
  })));
 
});
