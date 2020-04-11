import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaComponent } from './pesquisa.component';
import { GithubService } from '../../services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
});
