import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Ajuste o caminho conforme sua estrutura
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injeta o AuthService para verificar a autenticação
  const router = inject(Router); // Injeta o Router para redirecionar, se necessário

  if (authService.isAuthenticated()) {
    return true; // Permitir o acesso se o usuário estiver autenticado
  } else {
    router.navigate(['/auth/login']); // Redirecionar para a página de login se não autenticado
    return false; // Bloquear o acesso se não estiver autenticado
  }
};
