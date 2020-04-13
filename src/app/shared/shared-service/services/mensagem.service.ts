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
