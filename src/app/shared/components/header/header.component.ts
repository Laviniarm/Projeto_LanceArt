import { AuthService } from './../../services/auth.service';
import { authGuard } from './../../guards/auth.guard';
import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Referencia o menuTrigger que abre e fecha o matMenu
  @ViewChild(MatMenuTrigger)
  menuTrigger!: MatMenuTrigger;
  tituloPagina: string = '';
  constructor(public authService: AuthService, public roteador: Router) {
    this.roteador.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizarTitulo(event.urlAfterRedirects);
      }
    });
  }

  logout() {
    this.authService.logout();

    if (this.menuTrigger) {
      this.menuTrigger.closeMenu();
    }
    this.roteador.navigate(['/home']);
  }

  atualizarTitulo(url: string) {
    if (url.includes('cadastrar-nova-arte')) {
      this.tituloPagina = 'Cadastrar Nova Arte';
    } else if (url.includes('minhas-artes')) {
      this.tituloPagina = 'Minhas Artes';
    } else if (url.includes('editar-arte')) {
      this.tituloPagina = 'Editar Arte';
    } else {
      this.tituloPagina = 'LanceArt';
    }
  }
}
