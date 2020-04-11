import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PesquisaComponent } from './pesquisa.component';
import { GithubService } from '../../services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { USUARIO } from '../../services/usuario.mock';
import { UsuarioGitHub } from '../../models/usuario-github.model';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        GithubService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve limpar campo de usuário', () => {
    component.username.setValue('usuarioMocado');
    expect(component.username.value).toBeDefined();
    component.limparPesquisa(true);
    expect(component.username.value).toBeNull();
  });

  it('não deve limpar campo de usuário', () => {
    component.username.setValue('usuarioMocado');
    component.limparPesquisa(false);
    expect(component.username.value).toBeDefined();
  });

  it('deve buscar o usuário pelo login', async(inject([GithubService, HttpTestingController], (service, backend) => {
    service.buscarUsuario('adrianofelisberto').subscribe((usuario: UsuarioGitHub) => {
      expect(usuario).toBeDefined();
    });
    const request: any = backend.expectOne(`${environment.apiUrl}/users/adrianofelisberto`);
    request.flush(USUARIO);

    component.pesquisarUsuario(true);
  })));

  it('não deve buscar o usuário pelo login', async(inject([GithubService], (service) => {
    const serviceSpy = spyOn(service, 'buscarUsuario');
    component.pesquisarUsuario(false);
    expect(serviceSpy).toHaveBeenCalledTimes(0);
  })));
});
