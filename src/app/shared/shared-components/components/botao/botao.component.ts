import { Component, Attribute, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {

  @Output() eventoClique = new EventEmitter();

  constructor(
    @Attribute('placeholder') public placeholder: string = 'botão'
  ) { }

  /**
   * Método aciona o evento de clique para o componente pai
   */
  informarClique() {
    this.eventoClique.emit();
  }
}
