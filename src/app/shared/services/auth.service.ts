import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Certifique-se de importar o 'tap'
import { UsuarioFirestoreService } from './usuario-firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any = null;

  constructor(private firestoreService: UsuarioFirestoreService) {}

  login(email: string, senha: string): Observable<any> {
    return this.firestoreService.pesquisarPorEmailSenha(email, senha).pipe(
      tap((usuario) => {
        if (usuario) {
          this.currentUser = usuario; // Armazena o usuário autenticado
        }
      })
    );
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUserId() {
    return this.currentUser.id;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}
