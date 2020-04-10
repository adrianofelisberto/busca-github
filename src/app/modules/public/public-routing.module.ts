import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PesquisaComponent } from './components/pesquisa/pesquisa.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisa',
    pathMatch: 'full'
  },
  {
    path: 'pesquisa',
    component: PesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
