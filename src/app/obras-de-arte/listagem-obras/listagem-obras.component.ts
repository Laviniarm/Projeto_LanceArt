import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';
import {MensagemService} from "../../shared/services/mensagem.service";

@Component({
  selector: 'app-listagem-obras',
  templateUrl: './listagem-obras.component.html',
  styleUrl: './listagem-obras.component.css',
})
export class ListagemObrasComponent {
  obras: ObraDeArte[] = [];

  constructor(
    private roteador: Router,
    private obraDeArteService: ObraDeArteService,
    private mensagemService: MensagemService
  ) {
    obraDeArteService.listar().subscribe({
      next: (obraR) => {
        this.obras = obraR;
        this.mensagemService.MensagemSucesso('Obras de arte carregadas com sucesso!');
      },
      error: () => {
        this.mensagemService.MensagemErro('Erro ao carregar as obras de arte.');
      }
    });
  }

  remover(obraDeArte: ObraDeArte) {
    this.obraDeArteService.remover(obraDeArte).subscribe({
      next: () => {
        this.obras = this.obras.filter((O) => O.id !== obraDeArte.id);

        this.mensagemService.MensagemSucesso('Obra de arte removida com sucesso!');
      },
      error: () => {
        this.mensagemService.MensagemErro('Erro ao remover a obra de arte.');
      }
    });
  }

  editar(obraAEditar: ObraDeArte) {
    this.roteador.navigate(['editarArte', obraAEditar.id]);
  }
}
