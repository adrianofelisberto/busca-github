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

import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imagem-octocat',
  templateUrl: './imagem-octocat.component.html',
  styleUrls: ['./imagem-octocat.component.scss']
})
export class ImagemOctocatComponent {

  @Input() tamanho = 100;

  /**
   * Acessa o atributo de style, acessa variável criada no scss, modificando o valor
   */
  @HostBinding('attr.style')
  public get valorString(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--porcentagem-img: ${this.tamanho}%`);
  }

  constructor(private sanitizer: DomSanitizer) {}


}
