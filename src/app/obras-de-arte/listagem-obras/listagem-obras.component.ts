import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';

@Component({
  selector: 'app-listagem-obras',
  templateUrl: './listagem-obras.component.html',
  styleUrl: './listagem-obras.component.css',
})
export class ListagemObrasComponent {
  obras: ObraDeArte[] = [];

  constructor(
    private roteador: Router,
    private obraDeArteService: ObraDeArteService
  ) {
    obraDeArteService.listar().subscribe({
      next: (obraR) => (this.obras = obraR),
    });
  }

  remover(obraDeArte: ObraDeArte) {
    this.obraDeArteService.remover(obraDeArte).subscribe({
      next: () => {
        this.obras = this.obras.filter((O) => O.id !== obraDeArte.id);
      },
    });
  }

  editar(obraAEditar: ObraDeArte) {
    this.roteador.navigate(['editarArte', obraAEditar.id]);
  }
}
