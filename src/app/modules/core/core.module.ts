import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usuarioReducer } from './reducers/usuario-reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      usuario: usuarioReducer
    })
  ]
})
export class CoreModule { }
