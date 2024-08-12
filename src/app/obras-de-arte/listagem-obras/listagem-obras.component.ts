import { Component } from '@angular/core';
import {Obras} from "../../shared/model/Obras";
import {Router} from "@angular/router";
import {ObraDeArte} from "../../shared/model/ObraDeArte";

@Component({
  selector: 'app-listagem-obras',
  templateUrl: './listagem-obras.component.html',
  styleUrl: './listagem-obras.component.css'
})
export class ListagemObrasComponent {
  obras = Obras

  constructor(private roteador: Router) {
  }

  remover(arteARemover: ObraDeArte) {
    this.obras = this.obras.filter(obraDeArte => obraDeArte.id != arteARemover.id);
  }

  editar(arteAEditar: ObraDeArte) {
    this.roteador.navigate(['editarArte', arteAEditar.id])
  }
}
