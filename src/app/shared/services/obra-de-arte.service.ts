import { Injectable } from '@angular/core';
import { ObraDeArte } from '../models/ObraDeArte';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ObraDeArteService {

  URL_OBRAS = 'http://localhost:3000/obraDeArte';
  constructor(private httpClient: HttpClient) {}

  inserir(obraDeArte: ObraDeArte): Observable<ObraDeArte> {
    return this.httpClient.post<ObraDeArte>(this.URL_OBRAS, obraDeArte);
  }

  remover(obraDeArte: ObraDeArte): Observable<any> {
    return this.httpClient.delete(`${this.URL_OBRAS}/${obraDeArte.id}`);
  }

  listar(): Observable<ObraDeArte[]> {
    console.log('Fazendo requisição para listar Obras');
    return this.httpClient.get<ObraDeArte[]>(this.URL_OBRAS);
  }

  buscar(id: string): Observable<ObraDeArte> {
    return this.httpClient.get<ObraDeArte>(`${this.URL_OBRAS}/${id}`);
  }

  atualizar(obraDeArte: ObraDeArte): Observable<ObraDeArte> {
    return this.httpClient.put<ObraDeArte>(
      `${this.URL_OBRAS}/${obraDeArte.id}`,
      obraDeArte
    );
  }
}

  // criarObra(
  //   titulo: string,
  //   artista: string,
  //   ano: number,
  //   valorInicial: number,
  //   imagem: string
  // ) {
  //   const id = this.obras.length + 1;
  //   const novaObra = new ObraDeArte(
  //     id.toString(),
  //     titulo,
  //     artista,
  //     ano,
  //     valorInicial,
  //     imagem
  //   );
  //   this.inserir(novaObra);
  // }

  // listarObras() {
  //   return this.obras;
  // }
  //
  // removerObra(obra: ObraDeArte) {
  //   this.obras = this.obras.filter((obraDeArte) => obraDeArte != obra);
  // }
  //
  // private inserir(obra: ObraDeArte) {
  //   this.obras.push(obra);
  // }
//}
