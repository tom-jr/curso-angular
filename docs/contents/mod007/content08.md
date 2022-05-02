# Resolver
O resolver é uma implementação para que possamos resolver
um componente antes de renderiza-lo através de uma rota

Em um caso de um form, que antes de renderizar a pagina precisamos
buscar em um serviço backend as dados necessários. Assim a pagina renderiza apos
a requisição apenas.



Um exemplo onde que para renderizar um Componente primeiro precisará ser resolvido o Objeto Aluno.
~~~ javascript

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{

  constructor(private alunosService: AlunosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Aluno | Observable<Aluno> | Promise<Aluno> {

    let id = route.params['id'];
    let aluno: Aluno =  this.alunosService.getAlunoById(id);
    return aluno;
  }
}
~~~
Depois é necessário declarar o resolve no path referente ao componente que dependera desse resolver

~~~ javascript

const routes: Routes = [
  {
    path: '', component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent, resolve: {aluno: AlunoDetalheResolver} }, <<<----
      { path: ':id/editar', component: AlunoFormComponent },

    ], canActivateChild: [AlunosGuard],
    canDeactivate: [AlunosCandeactivateGuard]
  },
];
~~~

Então quando podemos consumir o objeto do resolve no componente da rota 



CanActivate --> para Entrar
CanDeactivate --> para sair
Resolve --> resolve antes de entrar. Baseado em uma class 