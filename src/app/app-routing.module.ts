import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { CadastroObrasComponent } from './obras-de-arte/cadastro-obras/cadastro-obras.component';
import { authGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { ListagemObrasComponent } from './obras-de-arte/listagem-obras/listagem-obras.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/cadastro', component: CadastroComponent },
  {
    path: 'listagemArte',
    component: ListagemObrasComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cadastrarArte',
    component: CadastroObrasComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
