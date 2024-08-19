import {Component} from '@angular/core';
import {ObraDeArte} from '../../shared/models/ObraDeArte';
import {ActivatedRoute, Router} from '@angular/router';
import {ObraDeArteService} from "../../shared/services/obra-de-arte.service";

@Component({
  selector: 'app-cadastro-obras',
  templateUrl: './cadastro-obras.component.html',
  styleUrl: './cadastro-obras.component.css',
})
export class CadastroObrasComponent {
  obraDeArte = new ObraDeArte('0', '', '', 0, 0, '');
  editando = false;

  constructor(private rotaAtual: ActivatedRoute,
              private obraDeArteService: ObraDeArteService,
              private roteador: Router) {
    const idArte = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
    if (idArte) {
      this.editando = true;
      this.obraDeArteService.buscar(idArte).subscribe({
        next: (ObraR) => {
          this.obraDeArte = ObraR
        },
        error: () => {
          this.roteador.navigate(['listagemArtes']);
        }
      })
    }
  }

  manterArte() {
    if (!this.editando) {
        this.obraDeArteService.inserir(this.obraDeArte).subscribe(
          {
            next: () => {
            }
          });
        this.roteador.navigate(['listagemArtes']);
      } else {
      this.obraDeArteService.atualizar(this.obraDeArte).subscribe(
        {
          next: () => {
            this.roteador.navigate(['listagemArtes']);
          }
        }
      )
    }

   }

  acao() {
    return this.editando ? 'Edite sua obra' : 'Cadastre sua obra';
  }
}
