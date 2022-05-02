# Can Load

é uma implementação que possibilita organizar o load dos módulos.
assim, permitindo configurar o loading de módulos de acordo com a logica
que desejarmos implementar

O método pode ser implementado no App.Auth>Guard:

~~~ javascript
export class AuthGuard implements CanActivate, CanLoad {



  constructor(private autService: AuthService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('CanLoad  LOG')

    return this.verify(route);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {

    return this.verify(route);
  }

  private verify(route: any) {
    if (this.autService.getUserAuth()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
~~~

assim canLoad vai verificar se pode acessar o componente e o canLoad verifica se pode carregaR o componente
ou o seu modulo.