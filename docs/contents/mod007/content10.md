## Criar uma rota para recurso não encontrado

- geramos um component de pagina não encontrada

- adicionamos no  app.routing mais um objeto de rota com path '**' assim toda e qualquer rota que não existe sera 
desse path. 
OBS: ordenar de forma hard coded para evitar erro na renderização de pages

~~~ javascript
const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule), canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard] },
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule), canActivate: [AuthGuard], canLoad: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path:'**',component:PageNotFoundComponent}  <<<< ----
];
~~~


## Redirecionamento de rota


~~~ javascript
const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule), canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard] },
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule), canActivate: [AuthGuard], canLoad: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path:'',redirectTo:'/home',pathMatch: 'full'}, <<< -----
    {path:'**',component:PageNotFoundComponent}
];
~~~