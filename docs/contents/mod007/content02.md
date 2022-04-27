# Router Link

Apos toda a parte minima de rotas configuradas nos criamos uma menuTop
e definimos as opções para trocar as rotas.
Utilizamos a diretiva ***routerLink*** para definir a rota em cada opção

~~~ html
<nav>
  <div class="nav-wrapper">
    <a routerLink="" class="brand-logo">Rotas</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li [routerLinkActive]="active"><a routerLink="/login">Login</a></li>
      <li [routerLinkActive]="active"><a routerLink="/cursos">Cursos</a></li>
    </ul>
  </div>
</nav>
~~~

## Aplicando css em rotas ativas

a diretiva routerLinkActive adiciona o css de class active quando a rota for a ativa.
Tudo de forma automática.

## Definindo e extraindo paramentos de rotas

Quando queremos que a rota considere um trecho do path como parâmetro adicionamos ':'

~~~ javascript
const APP_ROUTES: Routes = [
    {path:'/path/:id', component: ComponentX}
];
~~~

o id sera um parâmetro devido esta precedido do ':'
Para poder capturar o valor da rota, utilizamos o routerLink como um propertyBind:
~~~ html
<li routerLinkActive="active"><a [routerLink]="['/cursos',idCurso.value]">Cursos com id</a></li>
~~~


Para obter o parâmetro no componente nos injetamos no construtor do componente
o ***ActivatedRoute***
subscription 

~~~ javascript
 
  ngOnInit(): void {
    this.subscription = this.routeActive.params.subscribe((params: any)=>{
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);
     this.notFound(this.curso);
    });

notFound(curso: any){
    if(!curso){
    this.router.navigate(['/not-found']);
}
  }
~~~

Para mudar de rotas quando desejamos de acordo com a logica que aplicarmos
utilizamos o método navigate(['path']) do modulo ***Router*** que devemos injetar
