import { Injectable } from '@angular/core';
import { OBRAS } from '../models/OBRAS';
import { ObraDeArte } from '../models/ObraDeArte';

@Injectable({
  providedIn: 'root',
})
export class ObraDeArteService {
  private obras = OBRAS;
  constructor() {}

  criarObra(
    titulo: string,
    artista: string,
    ano: number,
    valorInicial: number,
    imagem: string
  ) {
    const id = this.obras.length + 1;
    const novaObra = new ObraDeArte(
      id.toString(),
      titulo,
      artista,
      ano,
      valorInicial,
      imagem
    );
    this.inserir(novaObra);
  }

  listarObras() {
    return this.obras;
  }

  removerObra(obra: ObraDeArte) {
    this.obras = this.obras.filter((obraDeArte) => obraDeArte != obra);
  }

  private inserir(obra: ObraDeArte) {
    this.obras.push(obra);
  }
}
