import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesGrupoContentComponent } from './botoes-grupo-content.component';

describe('BotoesGrupoContentComponent', () => {
  let component: BotoesGrupoContentComponent;
  let fixture: ComponentFixture<BotoesGrupoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesGrupoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesGrupoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
