import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  
  const service = inject(AuthService);
  const router = inject(Router);

  if(service.authenticated()) {
    
    if(isTokenExpired()) {
      service.logout();
      router.navigate(['/login']);
      return false;
    }
    
    const userRole = service.usuario.usuario?.rol;
    const requiredRole = route.data['role'] as string;

    if (!hasAccess(userRole, requiredRole)) {
      router.navigate(['/forbidden']);
      return false;
    }
    
    return true;
  }
  router.navigate(['/login']);
  return false;
};

const isTokenExpired = () => {
  const service = inject(AuthService);
  const token = service.token;
  const payload = service.getPayload(token);
  const exp = payload.exp;
  const now = new Date().getTime() / 1000;
  return (now > exp) ? true : false;
}

const hasAccess = (userRole: string, requiredRole: string) => {
  const rolesHierarchy = {
    'cliente': 1,
    'entrenador': 2,
    'administrador': 3
  };
  
  return rolesHierarchy[userRole] >= rolesHierarchy[requiredRole];
}
