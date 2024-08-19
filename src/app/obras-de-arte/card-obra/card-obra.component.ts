import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { Router } from '@angular/router';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';

@Component({
  selector: 'app-card-obra',
  templateUrl: './card-obra.component.html',
  styleUrls: ['./card-obra.component.scss'],
})
export class CardObraComponent {
  @Input() obra!: ObraDeArte;
  @Output() removerDaListagem = new EventEmitter<any>();
  // @Output() editar = new EventEmitter<any>();

  constructor(
    private roteador: Router,
    private obraDeArteService: ObraDeArteService
  ) {}

  removerObra() {
    this.obraDeArteService.removerObra(this.obra);
    this.removerDaListagem.emit();
  }

  editar(arteAEditar: ObraDeArte) {
    this.roteador.navigate(['editarArte', arteAEditar.id]);
  }
}
