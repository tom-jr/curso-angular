import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CursoDetalhesComponent } from '../curso-detalhes/curso-detalhes.component';

@Injectable({
  providedIn: 'root'
})
export class CursoCandeactivate implements CanDeactivate<CursoDetalhesComponent>{

  constructor() { }
  canDeactivate(component: CursoDetalhesComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const verify = confirm('do you wanna really leave?');
    return verify;
  }
}
