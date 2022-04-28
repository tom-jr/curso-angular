# Definindo e extraindo parâmetros de URL

Diretiva **QueryParams** como valor, recebe um objeto com chave e valor dos parâmetros de URL

Neste exemplo usar o url parâmetro para controle da consulta de uma lista. Onde informa o parâmetro
para uma paginação do backend. Podemos realizar a captura e atualização deste parâmetro


~~~ html
<nav>
  <div class="nav-wrapper">
    <a routerLink="" class="brand-logo">Rotas</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li routerLinkActive="active"><a routerLink="/login">Login</a></li>

      <li routerLinkActive="active"><a routerLink="/cursos" [queryParams]="{page: 1}">Cursos</a></li> ------


      <li routerLinkActive="active"><a [routerLink]="['/cursos',idCurso.value]">Cursos com id</a></li>
    </ul>
  </div>
</nav>
~~~

Quando se navegar para a rota o parâmetro url de pagina irá esta definida como a primeira pagina.
podemos capturar e atualizar esse valor, fazendo um subscribe para capturar o mesmo.

~~~ javascript
ngOnInit(): void {
     
     this.subscription = this.activeRoute.queryParams.subscribe((params: any)=>{
       this.page = params['page'];
      });
    }
    ngOnDestroy(): void {
     this.subscription.unsubscribe();
    }
~~~


Então assim, podemos acessar a rota com o novo parâmetro de queryUrl atualizado

~~~ javascript
  nextPage() {
    this.page++;
    this.router.navigate(['/cursos'], { queryParams: { 'page': this.page } });
  }
~~~