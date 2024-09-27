import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule} from "@angular/forms";
import {FirestoreModule} from "@angular/fire/firestore";


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    // FirestoreModule,
  ]
})
export class AuthModule { }
