import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData('pt');

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
