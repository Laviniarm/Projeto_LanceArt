import { Component } from '@angular/core';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ActivatedRoute, Router } from '@angular/router';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';

@Component({
  selector: 'app-cadastro-obras',
  templateUrl: './cadastro-obras.component.html',
  styleUrl: './cadastro-obras.component.css',
})
export class CadastroObrasComponent {
  obras: ObraDeArte[] = [];
  obraDeArte: ObraDeArte;
  editando = false;

  constructor(
    private rotaAtual: ActivatedRoute,
    private obraDeArteService: ObraDeArteService,
    private roteador: Router
  ) {
    const idArte = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
    if (idArte !== undefined) {
      this.editando = true;
      this.obraDeArte = this.obraDeArteService.obraPorId(idArte) as ObraDeArte;
    } else {
      this.obraDeArte = new ObraDeArte('', '', '', 0, 0, '');
    }
  }

  manterArte() {
    if (!this.editando) {
      this.obraDeArteService.criarObra(
        this.obraDeArte.titulo,
        this.obraDeArte.artista,
        this.obraDeArte.ano,
        this.obraDeArte.valorInicial,
        this.obraDeArte.imagem
      );
    } else {
      this.obraDeArteService.atualizarObra(this.obraDeArte);
    }
    this.roteador.navigate(['/listagemArtes']);
  }

  acao() {
    return this.editando ? 'Edite sua obra' : 'Cadastre sua obra';
  }
}
