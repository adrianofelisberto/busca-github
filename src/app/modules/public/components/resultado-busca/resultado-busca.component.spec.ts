import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscaComponent } from './resultado-busca.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';

describe('ResultadoBuscaComponent', () => {
  let component: ResultadoBuscaComponent;
  let fixture: ComponentFixture<ResultadoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultadoBuscaComponent,
        PesquisaComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        CoreModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: PesquisaComponent}]
        )
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

});
