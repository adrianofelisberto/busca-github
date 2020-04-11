import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { Adicionar } from 'src/app/modules/core/consts/action.const';

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
    private gitHubService: GithubService,
    private store: Store<UsuarioGitHub>,
    private router: Router
  ) { }

  limparPesquisa(limpar: boolean) {
    if (limpar) {
      this.username.reset();
    }
  }

  pesquisarUsuario(pesquisar: boolean) {
    if (pesquisar) {
      this.gitHubService.buscarUsuario('adrianofelisberto')
        .subscribe(async resposta => {
          console.log(resposta);
          await this.store.dispatch(Adicionar(resposta));
          this.router.navigate(['resultado/adrianofelisberto']);
        });
    }
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && (this.username.touched || this.username.dirty);
  }

}
