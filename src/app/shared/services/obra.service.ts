import { Injectable } from '@angular/core';
// @ts-ignore
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
    const id = this.gerarId();
    const novaObra = new ObraDeArte(
      id,
      titulo,
      artista,
      ano,
      valorInicial,
      imagem
    );
    this.inserir(novaObra);
  }

  private gerarId(): string {
    return (this.obras.length + 1).toString();
  }

  private inserir(obra: ObraDeArte) {
    this.obras.push(obra);
  }

  listarObras() {
    return this.obras;
  }

  atualizarObra(obra: ObraDeArte) {
    const index = this.obras.findIndex((o) => o.id === obra.id);
    if (index !== -1) {
      this.obras[index] = obra;
    }
  }

  removerObra(obra: ObraDeArte) {
    this.obras = this.obras.filter((obraDeArte) => obraDeArte != obra);
  }

  obraPorId(id: string): ObraDeArte | undefined {
    return this.obras.find((obra) => obra.id === id);
  }
}
