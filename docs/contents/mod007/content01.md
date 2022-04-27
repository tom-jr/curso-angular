# Rotas

Para criar rotas:

- Criamos um arquivo com nome: **name.routing.ts**

- Criamos uma constante chamada **APP_ROUTES** do type Routes do angular/router:

~~~ javascript
const APP_ROUTES: Routes = [
    {path:'',component: }
];
~~~
Adicionamos um objeto no APP_ROUTES com o **path**, que é o caminho URI e o **component** o componente
que sera renderizado referente aquele path

- Criar uma variável routing do tipo ModuleWithProviders.

~~~ javascript
const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
~~~


- Adicionar o routes no app.module no metadado imports

- Adicionar a tag ***<router-outlet>*** no app.component.html

Assim as rotas estarão criadas. Caso adicionar os path nas URL os componentes
referentes serão renderizados.