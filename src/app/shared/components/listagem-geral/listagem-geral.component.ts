import { ObraDeArte } from '../../models/ObraDeArte';
import { ObraDeArteService } from '../../services/obra-de-arte.service';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-listagem-geral',
  templateUrl: './listagem-geral.component.html',
  styleUrl: './listagem-geral.component.css',
})
export class ListagemGeralComponent {
  obras: ObraDeArte[] = [];
  lance: { [id: string]: number } = {};
  mensagem: string = '';

  constructor(
    private obraDeArteService: ObraDeArteService,
    private mensagemService: MensagemService
  ) {
    obraDeArteService.listar().subscribe({
      next: (obra) => (this.obras = obra),
    });
  }

  darLance(obraId: string) {
    const valorLance = this.lance[obraId];
    const obra = this.obras.find((o) => o.id === obraId); // Encontrar a obra pelo ID

    if (valorLance && obra) {
      const valorLanceNumber = Number(valorLance);

      if (valorLanceNumber > (obra.valorInicial || obra.valorInicial)) {
        obra.valorInicial = valorLanceNumber;
        this.mensagemService.MensagemSucesso(
          `Lance de R$ ${valorLanceNumber} dado com sucesso!`
        );
        console.log('Lance dado com sucesso:', valorLanceNumber);
      } else {
        this.mensagemService.MensagemErro(
          'O lance deve ser maior que o valor atual.'
        );
      }
    } else {
      this.mensagemService.MensagemErro('Erro ao dar um lance');
    }
  }
}
