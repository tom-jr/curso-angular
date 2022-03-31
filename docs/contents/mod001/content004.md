# Módulos
- Ajudar a organizar a aplicação e modulariza-la. 
- Podemos desenvolver os nossos diretórios
- Podemos selecionar os componentes que desejarmos expor de um modulo para outros módulos

## Composição do modulo
- A priore temos a definição da class 
~~~ javascript
export class AppModule{}
~~~

- Para a class ser reconhecida pelo Angular como um modulo ela recebe o decorator de
***@Module*** do pacote ***@angular/core***. O @Module também tem seus metadados:
    - **declarations:** declaramo os nomes de todos os ***components***, ***diretivas*** e ***pipes*** que iremos utilizar nesse modulo
    - **imports**: Adicionamos outros módulos que desejamos utilizar nesse modulo
    - **providers**: Adicionamos os serviços que vão ficar disponíveis.
    - **bootstrap**: define o component de start da aplicação. Geralmente esse metadado so é apresentado no appModule root
~~~ javascript
@Module({
    declarations:[
        AppComponent
    ],
    imports:[],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}
~~~

## Gerar um modulo
~~~ bash
$ ng g module {nome_module}
~~~
Apos criado o module novo tem uma estrutura diferente do module root

~~~ javascript

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NomeModule { }
~~~
Caso criarmos um componente com o mesmo nome do module, o CLI ja o cria no mesmo diretório
e atualiza o module com a declaração do mesmo no seu metadado de declarations.
Caso queira adicionar mais um component declare antes do nome do component o modulo. EX:
Eu tenho o moduloX e moduloY

para criar um component root de cada um basta
~~~ bash
$ ng g component moduloX
$ ng g component moduloY
~~~
Assim vai gerara seus componentes.
E para criar novos componentes para os módulos:

~~~ bash
$ ng g component moduloX/new-component
$ ng g component moduloY/new-component
~~~
Os components serão automaticamente declarados em seus respectivos módulos.

Para poder usar o selector do componente de outro module é necessário fazer duas etapas
1. No modulo Pai do component que deseja expor no app root adicionar o component no metadado de exports
2. No AppModule root importar o modulo Pai
## StyleGuide

**nome do arquivo**: app.module.ts
**declaração da class**: export class AppModule{}