import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {

  username = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private gitHubService: GithubService
  ) { }

  limparPesquisa(limpar: boolean) {
    if (limpar) {
      this.username.reset();
    }
  }

  pesquisarUsuario(pesquisar: boolean) {
    if (pesquisar) {
      this.gitHubService.buscarUsuario('adrianofelisberto')
        .subscribe(resposta => console.log(resposta));
    }
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && (this.username.touched || this.username.dirty);
  }

}
