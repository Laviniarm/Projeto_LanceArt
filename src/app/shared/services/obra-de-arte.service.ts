import { Injectable } from '@angular/core';
import { ObraDeArte } from '../models/ObraDeArte';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObraDeArteService {
  URL_OBRAS = 'http://localhost:8080/obras';

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

  listarImagens(): Observable<string[]> {
    return this.httpClient
      .get<ObraDeArte[]>(this.URL_OBRAS)
      .pipe(map((obras) => obras.map((obra) => obra.imagem)));
  }

  listarPorUsuarioId(usuarioId: String): Observable<ObraDeArte[]> {
    return this.httpClient.get<ObraDeArte[]>(
      `${this.URL_OBRAS}/usuario/${usuarioId}`
    );
  }
}
