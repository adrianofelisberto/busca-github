import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private gitHubService: GithubService
  ) { }

  ngOnInit(): void {
    this.gitHubService.buscarUsuario('adrianofelisberto')
      .subscribe(resposta => console.log(resposta));
  }

  limparPesquisa(limpar: boolean) {
    if (limpar) {
      console.log('limpar pesquisa');
    }
  }

  pesquisarUsuario(pesquisar: boolean) {
    if (pesquisar) {
      console.log('pesquisar usuário');
    }
  }

}
