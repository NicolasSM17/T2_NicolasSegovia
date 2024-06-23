import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacionGuard: CanActivateFn = (route, state) => {

  const usuario = sessionStorage.getItem('usuario');
  const router = inject(Router)
  
  if (usuario) {
    return true;
  } else {
    router.navigate(["autenticacion"], {queryParams: {blockedPage: state.url}})
    return false;
  }
};
