import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';
import { StoreComponent } from './store/store.componets';

@Injectable()
export class tiendaPrimeroGuard {
  private primeraNavegacion = true;
  constructor(private ruta: Router) {}

  canActivate(ruta: ActivatedRoute, state: RouterStateSnapshot): boolean {
    if (this.primeraNavegacion) {
      this.primeraNavegacion = false;
      if (ruta.component != StoreComponent) {
        this.ruta.navigateByUrl('/');
        return false;
      }
    }
      return true;
  }
}
