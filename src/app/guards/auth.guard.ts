import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Verificar si el usuario está autenticado
    const isAuthenticated = localStorage.getItem('username') !== null;
    
    if (isAuthenticated) {
      return true; // Permitir acceso
    } else {
      this.router.navigate(['/login']); // Redirigir al login
      return false; // Bloquear acceso
    }
  }
}
