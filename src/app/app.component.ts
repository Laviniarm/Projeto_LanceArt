import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tituloPagina: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizarTitulo(event.urlAfterRedirects);
      }
    });
  }

  atualizarTitulo(url: string) {
    if (url.includes('cadastrar-nova-arte')) {
      this.tituloPagina = 'Cadastro de Obra';
    } else if (url.includes('minhas-artes')) {
      this.tituloPagina = 'Listagem de Obras';
    } else if (url.includes('editar-arte')) {
      this.tituloPagina = 'Editar Obra';
    } else {
      this.tituloPagina = 'Lance Art';
    }
  }
}
