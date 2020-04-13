export class InteracaoUsuario {

  static possuiEspaco(event: KeyboardEvent) {
    if (event.key === ' ') {
      return true;
    }
    return false;
  }

}
