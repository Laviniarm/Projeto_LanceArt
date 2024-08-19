import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';

@Component({
  selector: 'app-listagem-obras',
  templateUrl: './listagem-obras.component.html',
  styleUrl: './listagem-obras.component.css',
})
export class ListagemObrasComponent implements OnInit {
  obras: ObraDeArte[] = [];

  constructor(
    private roteador: Router,
    private obraDeArteService: ObraDeArteService
  ) {}

  carregarObras() {
    this.obras = this.obraDeArteService.listarObras();
  }

  ngOnInit(): void {
    this.carregarObras();
  }

  removeDaListagem() {
    this.carregarObras();
  }
}
