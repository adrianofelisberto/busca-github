import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { GithubService } from './services/github.service';


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
    HttpClientModule
  ],
  providers: [
    GithubService
  ]
})
export class PublicModule { }
