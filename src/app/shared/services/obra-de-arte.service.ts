import { Injectable } from '@angular/core';
import { ObraDeArte } from '../models/ObraDeArte';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObraDeArteService {
  URL_OBRAS = 'http://localhost:3000/obraDeArte';
  constructor(private httpClient: HttpClient) {}

  inserir(obraDeArte: ObraDeArte): Observable<ObraDeArte> {
    return this.listar().pipe(
      map((obras) =>
        obras.length > 0 ? Math.max(...obras.map((o) => +o.id)) + 1 : 1
      ),
      switchMap((novoId) => {
        obraDeArte.id = novoId.toString();
        return this.httpClient.post<ObraDeArte>(this.URL_OBRAS, obraDeArte);
      })
    );
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

  listarImagens(): Observable<string[]> {
    return this.httpClient
      .get<ObraDeArte[]>(this.URL_OBRAS)
      .pipe(map((obras) => obras.map((obra) => obra.imagem)));
  }
}
