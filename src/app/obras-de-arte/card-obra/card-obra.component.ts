import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-obra',
  templateUrl: './card-obra.component.html',
  styleUrls: ['./card-obra.component.scss'],
})
export class CardObraComponent {
  @Input() obra!: ObraDeArte;
  @Output() remover = new EventEmitter<any>();

  constructor(private roteador: Router) {}

  removerObra() {
    this.remover.emit();
  }

  editar(arteAEditar: ObraDeArte) {
    this.roteador.navigate(['editarArte', arteAEditar.id]);
  }
}
