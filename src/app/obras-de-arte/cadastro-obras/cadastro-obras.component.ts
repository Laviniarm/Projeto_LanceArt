import { Component } from '@angular/core';
import { OBRAS } from '../../shared/models/OBRAS';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-obras',
  templateUrl: './cadastro-obras.component.html',
  styleUrl: './cadastro-obras.component.css',
})
export class CadastroObrasComponent {
  obras = OBRAS;
  obraDeArte = new ObraDeArte('0', '', '', 0, 0, '');
  editando = false;

  constructor(private rotaAtual: ActivatedRoute) {
    const idArte = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
    if (idArte) {
      this.editando = true;
      this.obraDeArte = this.obras.filter(
        (obraDeArte) => obraDeArte.id === idArte
      )[0];
    }
  }

  manterArte() {
    if (!this.editando) {
      this.obras.push({
        id: this.obraDeArte.id,
        titulo: this.obraDeArte.titulo,
        artista: this.obraDeArte.artista,
        ano: this.obraDeArte.ano,
        valorInicial: this.obraDeArte.valorInicial,
        imagem: this.obraDeArte.imagem,
      });
      this.obraDeArte = {
        id: '0',
        titulo: '',
        artista: '',
        ano: 0,
        valorInicial: 0,
        imagem: '',
      };
    } else {
    }
  }

  acao() {
    return this.editando ? 'Edite sua obra' : 'Cadastre sua obra';
  }
}
