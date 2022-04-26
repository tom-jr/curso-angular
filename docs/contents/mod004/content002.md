## O que faz?
 semelhante ao if das linguagens de programação. Vamos levar o mesmo comportamento
dessa logica do if para o template.

Ex da estrutura:

~~~ html
<h1 *ngIf = "expression">Content</h1>
~~~

esse elemento so ira renderizar na tela caso a expressão for satisfeita.
Caso contrario não aparece.

Uma opção que é bem semelhante é o hidden. Porem a diferenças em níveis de consumo e segurança
O ngIf consome mais recursos e o hidden permite que o elemento fique visível nas ferramentas de DEV

Recomenda-se usar o hidden para arvores pequenas e o ng If para arvores DOM grandes.

Exemplo do hidden:

~~~ html
<h1 [hidden] = "expression">Content</h1>
~~~

Uma forma de usar o else em ngIf :

~~~ html
<h1 *ngIf = "expression; else varElement">Content</h1>
<h2 #varElement>No Content</h2>
~~~

Outra forma é declarar um componente que declara qual componente ira ser renderizado de acordo com
a expressão

~~~ html
<div *ngIf="condition; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>Content to render when condition is true.</ng-template>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
~~~
Outra forma que sera renderizado de acordo se o valor de uma variável ser null ou não

~~~ html
<div *ngIf="condition as value; else elseBlock">{{value}}</div>
<ng-template #elseBlock>Content to render when value is null.</ng-template>
~~~
