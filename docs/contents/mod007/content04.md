# Rotas Filhas

para definir rotas filhas basta adicionar a propriedade **children** nos objetos
de definição das rotas

~~~ javascript
const routes: Routes = [
  {
    path: 'alunos', component: AlunosComponent,
    children: [
      { path: '/novo', component: AlunoFormComponent },
      { path: '/:id', component: AlunoDetalheComponent },
      { path: '/:id/editar', component: AlunoFormComponent }
    ]
  },
];
~~~