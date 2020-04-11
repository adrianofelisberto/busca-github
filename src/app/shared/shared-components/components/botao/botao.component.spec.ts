import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoComponent } from './botao.component';

describe('BotaoComponent', () => {
  let component: BotaoComponent;
  let fixture: ComponentFixture<BotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve informar que o botão foi clicado', () => {
    spyOn(component.eventoClique, 'emit');
    component.informarClique();
    expect(component.eventoClique.emit).toHaveBeenCalled();
  });
});
