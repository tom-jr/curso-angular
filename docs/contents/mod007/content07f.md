# CanDeactivate

CanDeactivate serve para fazer uma pre-Saida de uma rota.
Caso queiramos. Assim tem a possibilidade de controlar melhor a 
navegação entre rotas.

Estrutura:
~~~ javascript
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
~~~

Apos criado declara o metadado canDeactivate na rota referente ao componente criado