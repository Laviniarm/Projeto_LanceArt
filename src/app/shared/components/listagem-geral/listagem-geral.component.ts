import { ObraDeArte } from '../../models/ObraDeArte';
import { ObraDeArteService } from './../../services/obra-de-arte.service';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatCard, MatCardHeader } from '@angular/material/card';
@Component({
  selector: 'app-listagem-geral',
  templateUrl: './listagem-geral.component.html',
  styleUrl: './listagem-geral.component.css',
})
export class ListagemGeralComponent {
  obras: ObraDeArte[] = [];
  constructor(private obraDeArteService: ObraDeArteService) {
    obraDeArteService.listar().subscribe({
      next: (obra) => (this.obras = obra),
    });
  }
}
