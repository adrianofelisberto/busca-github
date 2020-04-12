import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { Adicionar } from 'src/app/modules/core/consts/action.const';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusHttp } from 'src/app/shared/enuns/status-http.enum';
import { MensagemEnum } from 'src/app/shared/enuns/mensagem.enum';

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

  limparPesquisa() {
    this.username.reset();
  }

  pesquisarUsuario() {
    if (this.username.valid) {
      this.gitHubService.buscarUsuario(this.username.value)
        .subscribe(async resposta => {
          console.log(resposta);
          await this.store.dispatch(Adicionar(resposta));
          this.router.navigate(['resultado']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === StatusHttp.NOT_FOUND) {
            alert(MensagemEnum.USUARIO_NAO_ENCONTRADO);
          }
        });
    } else {
      this.username.markAsTouched();
    }
  }

  campoPesquisaInvalido(): boolean {
    return this.username.invalid && (this.username.touched || this.username.dirty);
  }

  verificarMensagem(erro: string) {
    return this.username.hasError(erro) && (this.username.touched || this.username.dirty);
  }

}
