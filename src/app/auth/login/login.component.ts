import { Component } from '@angular/core';
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioFirestoreService, private router: Router) {}

  login() {
    if (this.email && this.senha) {
      this.usuarioService.pesquisarPorEmailSenha(this.email, this.senha).subscribe(usuario => {
        if (usuario) {
          console.log('Login bem-sucedido!');
          this.router.navigate(['/home']);
        } else {
          console.log('Credenciais inválidas');
        }
      });
    } else {
      console.log('Preencha todos os campos!');
    }
  }
}
