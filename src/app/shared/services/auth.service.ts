import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Certifique-se de importar o 'tap'
import { UsuarioFirestoreService } from './usuario-firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any = null;

  constructor(private firestoreService: UsuarioFirestoreService) {
    this.loadUserFromSession();
  }

  // Método para carregar o usuário do sessionStorage
  private loadUserFromSession() {
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }
  }

  login(email: string, senha: string): Observable<any> {
    return this.firestoreService.pesquisarPorEmailSenha(email, senha).pipe(
      tap((usuario) => {
        if (usuario) {
          this.currentUser = usuario; // Armazena o usuário autenticado
          sessionStorage.setItem('currentUser', JSON.stringify(usuario)); // Salva o usuário no sessionStorage
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

  getUserName() {
    return this.currentUser.nome;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('currentUser'); // Remove o usuário do sessionStorage ao fazer logout
  }
}
