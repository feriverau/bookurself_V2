import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DataService } from '../services/data.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    // Crear mocks de Router y DataService
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockDataService = jasmine.createSpyObj('DataService', ['someMethod']); // Puedes añadir métodos que uses en tus pruebas

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: mockRouter },
        { provide: DataService, useValue: mockDataService }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('debería ser creado', () => {
    expect(guard).toBeTruthy();
  });

  it('debería permitir acceso si el usuario está autenticado', () => {
    // Simular un usuario autenticado
    spyOn(localStorage, 'getItem').and.returnValue('testUser');

    const result = guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(result).toBeTrue(); // Se espera que el acceso sea permitido
    expect(mockRouter.navigate).not.toHaveBeenCalled(); // No debe redirigir al login
  });

  it('debería bloquear acceso si el usuario no está autenticado', () => {
    // Simular un usuario no autenticado
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(result).toBeFalse(); // Se espera que el acceso sea bloqueado
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']); // Debe redirigir al login
  });
});
