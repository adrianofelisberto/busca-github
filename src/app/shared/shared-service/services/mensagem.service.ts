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

import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable()
export class MensagemService {
  toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    width: 'auto',
    heightAuto: true
  });

  mostrarMensagemErro(mensagem: string) {
    this.toast.fire({
      title: `<span style="color: #fff">${mensagem}</span>`,
      background: 'rgba(207, 84, 84, 0.902)',
    });
  }

}
