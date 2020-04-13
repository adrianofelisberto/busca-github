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

import { Component, OnInit, Attribute, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent implements OnInit {

  @Input() centralizado = false;

  @Output() eventoCliqueBotao1 = new EventEmitter();
  @Output() eventoCliqueBotao2 = new EventEmitter();

  constructor(
    @Attribute('placeholderBtn1') public placeholderBtn1: string = 'Botão 1',
    @Attribute('placeholderBtn2') public placeholderBtn2: string = 'Botão 2',
  ) { }

  ngOnInit(): void {
  }

  acaoBotao(evento) {
    evento.emit();
  }

}
