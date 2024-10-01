import { Component } from '@angular/core';
import { ObraDeArte } from '../../shared/models/ObraDeArte';
import { ActivatedRoute, Router } from '@angular/router';
import { ObraDeArteService } from '../../shared/services/obra-de-arte.service';
import { MensagemService } from '../../shared/services/mensagem.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-cadastro-obras',
  templateUrl: './cadastro-obras.component.html',
  styleUrl: './cadastro-obras.component.css',
})
export class CadastroObrasComponent {
  obraDeArte = new ObraDeArte('0', '', '', 0, 0, '', ''); // Remover ID numérico
  editando = false;

  constructor(
    private rotaAtual: ActivatedRoute,
    private obraDeArteService: ObraDeArteService,
    private authService: AuthService,
    private roteador: Router,
    private mensagemService: MensagemService
  ) {
    const idArte = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
    if (idArte) {
      this.editando = true;
      this.obraDeArteService.buscar(idArte).subscribe({
        next: (ObraR) => {
          this.obraDeArte = ObraR;
        },
        error: () => {
          this.mensagemService.MensagemErro('Erro ao buscar a obra de arte.');
          this.roteador.navigate(['minhas-artes']);
        },
      });
    }
  }

  manterArte() {
    const usuarioAtual = this.authService.getCurrentUser(); // Obtenha o usuário autenticado

    console.log(usuarioAtual.id);

    if (!usuarioAtual) {
      console.error('Usuário não autenticado');
      return;
    }

    this.obraDeArte.usuarioId = usuarioAtual.id; // Atribui o ID do usuário autenticado

    if (!this.editando) {
      this.obraDeArteService.inserir(this.obraDeArte).subscribe({
        next: () => {
          this.mensagemService.MensagemSucesso(
            'Obra de arte cadastrada com sucesso!'
          );
          this.roteador.navigate(['minhas-artes']);
        },
        error: () => {
          this.mensagemService.MensagemErro(
            'Erro ao cadastrar a obra de arte.'
          );
        },
      });
    } else {
      this.obraDeArteService.atualizar(this.obraDeArte).subscribe({
        next: () => {
          this.mensagemService.MensagemSucesso(
            'Obra de arte atualizada com sucesso!'
          );
          this.roteador.navigate(['minhas-artes']);
        },
        error: () => {
          this.mensagemService.MensagemErro(
            'Erro ao atualizar a obra de arte.'
          );
        },
      });
    }
  }

  acao() {
    return this.editando
      ? 'Edite sua obra de arte'
      : 'Cadastre sua obra de arte';
  }
}
