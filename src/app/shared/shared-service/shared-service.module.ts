import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacaoService } from './services/navegacao.service';
import { MensagemService } from './services/mensagem.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NavegacaoService,
    MensagemService
  ]
})
export class SharedServiceModule { }
