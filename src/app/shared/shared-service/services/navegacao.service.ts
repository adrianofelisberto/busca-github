import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  constructor(private router: Router) { }

  paginaInicial() {
    this.router.navigate(['/']);
  }

  resultadoBusca(username: string) {
    this.router.navigate([`/pesquisa/${username}`]);
  }

  visualizarRepositorios(username: string) {
    this.router.navigate([`/pesquisa/${username}/repositorios`]);
  }

}
