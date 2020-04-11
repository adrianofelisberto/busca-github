import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ResultadoBuscaComponent } from './components/resultado-busca/resultado-busca.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisa',
  },
  {
    path: 'pesquisa',
    children: [
      {
        path: '',
        component: PesquisaComponent,
      },
      {
        path: 'resultado',
        component: ResultadoBuscaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
