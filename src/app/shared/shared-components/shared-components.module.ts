import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemOctocatComponent } from './components/imagem-octocat/imagem-octocat.component';



@NgModule({
  declarations: [
    ImagemOctocatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagemOctocatComponent
  ]
})
export class SharedComponentsModule { }
