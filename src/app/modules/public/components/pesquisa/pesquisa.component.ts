import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  username = new FormControl(null, [Validators.required, Validators.minLength(3)]);

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
      console.log(this.username.value);
    }
  }

  pesquisarUsuario(pesquisar: boolean) {
    if (pesquisar) {
      console.log('pesquisar usuário');
    }
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && (this.username.touched || this.username.dirty);
  }

}
