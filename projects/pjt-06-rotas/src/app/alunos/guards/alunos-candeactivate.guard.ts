import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosComponent } from '../alunos.component';

@Injectable()
export class AlunosCandeactivateGuard implements CanDeactivate<AlunosComponent> {

  constructor() { }
  canDeactivate(component: AlunosComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('Passando metodo canDactivate');
    const result = confirm('Do you really wanna leave this page?');

    console.log(result);
    return result;
  }
}
