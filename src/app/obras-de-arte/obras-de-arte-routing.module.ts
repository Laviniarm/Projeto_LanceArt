import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemObrasComponent } from './listagem-obras/listagem-obras.component';
import { CadastroObrasComponent } from './cadastro-obras/cadastro-obras.component';

const routes: Routes = [
  { path: 'minhas-artes', component: ListagemObrasComponent },
  { path: 'cadastrar-nova-arte', component: CadastroObrasComponent },
  { path: 'editar-arte/:id', component: CadastroObrasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObrasDeArteRoutingModule {}
