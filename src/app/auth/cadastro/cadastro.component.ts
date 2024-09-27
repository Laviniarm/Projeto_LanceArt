import { Component } from '@angular/core';
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {Router} from "@angular/router";
import {Usuario} from "../../shared/models/Usuario";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioFirestoreService, private router: Router) {}

  cadastrar() {
    if (this.nome && this.email && this.senha) {
      const novoUsuario: Usuario = { id: '', nome: this.nome, email: this.email, senha: this.senha };
      this.usuarioService.inserir(novoUsuario).subscribe(() => {
        console.log('Usuário cadastrado com sucesso!');
        this.router.navigate(['/auth/login']);
      }, (error) => {
        console.error('Erro ao cadastrar usuário:', error);
      });
    } else {
      console.log('Preencha todos os campos!');
    }
  }
}
