import { Component } from '@angular/core';
import { UsuarioFirestoreService } from '../../shared/services/usuario-firestore.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import {MensagemService} from "../../shared/services/mensagem.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router,   private mensagemService: MensagemService) {}

  login() {
    if (this.email && this.senha) {
      this.authService.login(this.email, this.senha).subscribe(
        (usuario) => {
          if (usuario) {
            this.mensagemService.MensagemSucesso('Login bem-sucedido!');
            this.router.navigate(['/home']);
          } else {
            this.mensagemService.MensagemErro('Credenciais inválidas');
          }
        },
        (error) => {
          this.mensagemService.MensagemErro('Erro ao tentar logar: ' + error.message);
        }
      );
    } else {
      this.mensagemService.MensagemErro('Preencha todos os campos!');
    }
  }
}
