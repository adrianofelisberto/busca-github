/***************************************************************************************************
 * This program search an user from GitHub
 * Copyright (C) 2020 Adriano Araújo Felisberto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see [http://www.gnu.org/licenses/].
 */

import { Component, Attribute, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() placeholder: string;
  @Output() eventoClique = new EventEmitter();

  constructor(
    @Attribute('placeholder') public placeholderAtr: string = 'botão'
  ) { }

  ngOnInit() {
    this.placeholder = this.placeholder ? this.placeholder : this.placeholderAtr;
  }

  /**
   * Método aciona o evento de clique para o componente pai
   */
  informarClique() {
    this.eventoClique.emit();
  }
}
