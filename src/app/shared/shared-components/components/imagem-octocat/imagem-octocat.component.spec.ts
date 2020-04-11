import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemOctocatComponent } from './imagem-octocat.component';

describe('ImagemOctocatComponent', () => {
  let component: ImagemOctocatComponent;
  let fixture: ComponentFixture<ImagemOctocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemOctocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemOctocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
