# Guarda de Rotas

Logicamente tem o intuito de guarda(proteger) o acesso a nossas rotas configuradas.
Guarda de rotas é um tipo de service para adicionar métodos que serviram 
como uma auth e acesso as rotas.

- Vamos criar um diretório chamado guards para adicionar a primeira guardRouter do sistema

- Implementar o CanActivate para que seja uma rota ativável e implementarmos o método canActivate

~~~ javascript
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {

    if (this.autService.getUserAuth()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
~~~


Depois adicionamos o canActivate no App.routing.Module
~~~ javascript
const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule), canActivate: [AuthGuard] },
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule), canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
~~~