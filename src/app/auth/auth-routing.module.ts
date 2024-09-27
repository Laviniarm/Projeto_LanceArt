import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CadastroComponent} from "./cadastro/cadastro.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/auth/login' } //

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
