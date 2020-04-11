import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';


@NgModule({
  declarations: [
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
  ]
})
export class PublicModule { }
