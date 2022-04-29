# Lazy Load

O lazy load vai ajudar a carregar o o código no browser de forma
modularizada. De acordo com o nosso consumo, ira ser carregado um script.
Para configurar o Lazy Load:

- Em AppRoutingModule adicionamos um objeto de rota, mas esse objeto não ira definir uma
rota, mas sim fazer referencia ao modulo que entrara no scope de lazy load

~~~ javascript
const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule) },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
];
~~~

- No AppModule retire qualquer importe do Modulo que foi configurado na rota

- E no routing do Module configurado ajuste a rota pai, pois é como se ela estivesse configurada agora no
AppRoutingModule, deixe a rota em branco.

~~~ javascript
const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalhesComponent },
    { path: 'not-found', component: CursoNotFoundComponent },
];
~~~

~~~ javascript
const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalhesComponent },
    { path: 'not-found', component: CursoNotFoundComponent },
];
~~~

