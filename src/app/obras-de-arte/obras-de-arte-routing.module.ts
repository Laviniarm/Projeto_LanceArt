import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemObrasComponent } from './listagem-obras/listagem-obras.component';
import { CadastroObrasComponent } from './cadastro-obras/cadastro-obras.component';

const routes: Routes = [
  { path: 'listagemArtes', component: ListagemObrasComponent },
  { path: 'cadastrarArte', component: CadastroObrasComponent },
  { path: 'editarArte/:id', component: CadastroObrasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasDeArteRoutingModule { }
