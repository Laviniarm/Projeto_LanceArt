import { Component } from '@angular/core';
import { UsuarioFirestoreService } from '../../shared/services/usuario-firestore.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email && this.senha) {
      this.authService.login(this.email, this.senha).subscribe(
        (usuario) => {
          if (usuario) {
            console.log('Login bem-sucedido!');
            console.log('1 2 3...');
            console.log(usuario.id);
            this.router.navigate(['/home']);
          } else {
            console.log('Credenciais inválidas');
          }
        },
        (error) => {
          console.log('Erro ao tentar logar:', error);
        }
      );
    } else {
      console.log('Preencha todos os campos!');
    }
  }
}
