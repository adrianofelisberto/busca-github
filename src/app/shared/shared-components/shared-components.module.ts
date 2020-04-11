import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemOctocatComponent } from './components/imagem-octocat/imagem-octocat.component';
import { BotaoComponent } from './components/botao/botao.component';
import { BotoesGrupoContentComponent } from './components/botoes-grupo-content/botoes-grupo-content.component';
import { TituloComponent } from './components/titulo/titulo.component';



@NgModule({
  declarations: [
    ImagemOctocatComponent,
    BotaoComponent,
    BotoesGrupoContentComponent,
    TituloComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagemOctocatComponent,
    BotaoComponent,
    BotoesGrupoContentComponent,
    TituloComponent,
  ]
})
export class SharedComponentsModule { }
