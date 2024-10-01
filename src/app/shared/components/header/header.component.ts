import { AuthService } from './../../services/auth.service';
import { authGuard } from './../../guards/auth.guard';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public authService: AuthService, public roteador: Router) {}

  logout() {
    this.authService.logout();

    if (this.menuTrigger) {
      this.menuTrigger.closeMenu();
    }
    this.roteador.navigate(['/home']);
  }
}
