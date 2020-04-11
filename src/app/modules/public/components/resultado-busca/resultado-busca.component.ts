import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioGitHub } from 'src/app/shared/shared-models/models/usuario-github.model';
import { map } from 'rxjs/operators';
import { Limpar } from 'src/app/modules/core/consts/action.const';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent implements OnInit, OnDestroy {

  usuario: UsuarioGitHub;

  constructor(
    private store: Store<UsuarioGitHub>,
    // private router: Router
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      map((valor: any) => {
        if (valor.usuario) {
          return valor.usuario;
        }
        // this.router.navigate(['/']);
      })
    ).subscribe((usuario: UsuarioGitHub) => {
      this.usuario = usuario;
      console.log('usuario', this.usuario);
    });
  }

  ngOnDestroy() {
    this.store.dispatch(Limpar());
  }

}
