import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';

@Component({
  selector: 'app-listagem-obras',
  templateUrl: './listagem-obras.component.html',
  styleUrl: './listagem-obras.component.css',
})
export class ListagemObrasComponent {
  obras: ObraDeArte[] = [];
  usuarioId: any;

  constructor(
    private roteador: Router,
    private obraDeArteService: ObraDeArteService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuarioId = this.authService.getCurrentUserId();
    console.log('Usuário autenticado ID:', this.usuarioId); // Adicionado para verificação

    if (this.usuarioId) {
      this.obraDeArteService.listarPorUsuarioId(this.usuarioId).subscribe({
        next: (obra) => (this.obras = obra),
        error: (err) => {
          console.error('Erro ao buscar obras:', err); // Adicionado tratamento de erro
        },
      });
      console.log(this.obras);
    } else {
      console.log('USUÁRIO NÃO AUTENTICADO');
    }
  }

  remover(obraDeArte: ObraDeArte) {
    this.obraDeArteService.remover(obraDeArte).subscribe({
      next: () => {
        this.obras = this.obras.filter((O) => O.id !== obraDeArte.id);
      },
    });
  }

  editar(obraAEditar: ObraDeArte) {
    this.roteador.navigate(['editarArte', obraAEditar.id]);
  }
}
