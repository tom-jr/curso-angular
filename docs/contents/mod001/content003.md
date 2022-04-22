## Criar Projeto
Para criar o primeiro projeto vamos utilizar o Angular/CLI

~~~ bash
$ ng new primeiro-projeto # cria um novo projeto angular com o nome de primeiro-projeto
~~~
Depois que rodarmos o comando o CLI ira criar toda a estrutura de um projeto
instalando pacotes(dependências) necessárias.

Apos o projeto criado iremos ver no diretório a pasta de ***node-modules***, é onde estará
todas as bibliotecas do projeto, atuais e futuras que poderão ser instaladas.
No arquivo ***package.json*** está a declaração de todas as dependências e bibliotecas adicionadas no projeto


 Rodando o comando no diretório do projeto. Poderemos ver o Angular rodando uma pagina default. Onde iremos
modificar para tratarmos nossos projetos.
~~~ bash
ng serve #roda o projeto inicial na porta 4200 do localhost
~~~

Abrindo o navegador na URL localhost:4200 veremos:

![](/docs/assets/img/intro_005.png)

## Criar componentes
No caminho do diretório do projeto **src/app** é onde iremos criar os nossos ***components***
nele poderemos ver uma estrutura inicial ja formada

![](/docs/assets/img/intro_006.png)

- A priori iremos criar um component manualmente. Então no diretório de src/app criaremos uma nova
pasta com o nome de ***meu-primeiro-component***

- Criar arquivo typescript(ts) para o primeiro component

- Declara uma class como o nome do component, dentro do style guide tem que seguir os padrões. Por enquanto
a class não sera um component, sera apenas uma class normal em TS

~~~ javascript
class MeuPrimeiroComponent{

}
~~~

-  Para torna a class um component utilizaremos o decorator(o semelhante a annotation em JAVA)
***@Component*** do pacote ***@angular/core***. o @Component tem um corpo com seus **metadados** eles são
declarados entre as chaves ***{}***. Descrição dos metadados do ***@Component***
    - **selector:** informa o nome da tag do component. Assim quando for adicionar o mesmo em um outro componente
o mesmo sera declarado como \<nome-component\> \</nome-component\>
    - **templateUrl:** referencia o arquivo html onde sera construída a view do component. Ou podemos utiliza o decorator 
***template*** para que possamos adicionar de forma literal toda a estrutura HTML dentro das aspas  **''**.


~~~ javascript
@Component({
    selector: 'meu-primeiro-component',
    template: './app/meu-primeiro-component/meu-primeiro.component.html'
})
class MeuPrimeiroComponent{
    
    }
~~~

 Podemos então adicionar alguma informação em nosso template e tentar renderizar o nosso component em outro component
o component ***app.component.ts*** O component que foi criado na construção do projeto, ele é o mesmo que renderiza 
na pagina inicial do projeto Angular. Para renderizar seguimos os passos:

- Adicionamos o nosso selector no template do **app.component**
- Adicionarmos a keyword ***export*** em nosso component. Assim ele poderá ser visto e utilizado por outros components 
no projeto
- Todo component pertence a um modulo. Então o nosso component precisa ser declarado em um modulo. No caso utilizaremos
o modulo default criado pelo CLI, o ***app.module***. O app.module, assim como no component, também em sua declaração
um decorator para o identificar como um modulo, e um dos metadados do seu decorator é ***declarations:[]***, nele onde
é declarado todos os components pertencente aquele modulo. Então adicionaremos o nome de class do nosso component em seu
declarations.

## Criar component com o CLI
Agora como o component criado e renderizado noa paginal inicial, vamos criar um component via
CLI. 
No diretório do projeto rodamos

~~~ javascript
$ ng g component nome-component
~~~

Apos rodar o comando o CLI criar o component na pasta de app e ja vinculará o component
no declarations do app.modules.
os arquivos criados são:

![](/docs/assets/img/intro_007.png)

 



## Style guide
O style guide do angular para criar pastas é separa as palavras por traços como no component criado

    meu-primeiro-component

Para criar arquivos ts,css,html, etc... separamos as definições por '**.**'

    meu-primeiro.component.ts
    meu-primeiro.component.html
    meu-primeiro.component.css
    
Declaração de classes devem ter o nome da class em CamelCase.


