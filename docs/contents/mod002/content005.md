## Reusando Components com Input properties

adicionar um selector no principal

Passar dados de um componente para outro, no exemplo vamos passar
dados de um componente para o outro pela **tag selector**

o template tem uma tag selector de outro template. 
Então o template que esta hospedando o seletor vamos chamas de hospedador.

Para o hospedador passar um dado para o hospedado é preciso fazer os seguintes 
passos

Criamos o atributo ou objeto que queremos que receba o objeto/atributo no componente hospedado

~~~ javascript
attribute: string = 'Attribute_001';
~~~

Utilizar o decorator ***@Input()*** do ***@angular/core*** para que o attribute seja reconhecido como uma 
propriedade e assim fica elegível a ser declarado como uma **[propriedade]**. No caso 
o value sera o objeto/atributo do hospedador sera o value da propriedade
    **@Input()** O Input pode ter como metadado um identificador para o atributo que ele esta 
    identificando pois quando formos passar o attribute podemos usar o nome da variável ou o nome definido
    no @Input

~~~ javascript
@Input('att') attributeInput?: string;
~~~

No hospedado é enviado o propriedade pela sua tag selector como um atributo [key]="value"

Agora o cenário esta pronto
o component vai que vai receber o attribute tem uma input que recebe o valor do hospedador
e no template do hospedador ele passa o seu attribute dele usando o Input do hospedado.

Mais um Exemplo

No componentX tem uma varX, e quero que ela seja enviada para o componentY

~~~ javascript
varX: string = "ValueOfX";
~~~

No componentY criamos uma var que ira receber a varX

~~~ javascript
varY?: string;
~~~

Agora passamos no selector do componentY o varX.

~~~ html
<selectorY [getAtt]="this.varX"></selectorY>
~~~

O angular não reconhece o getAtt como uma propriedade conhecida
Então para ser reconhecida e passar o valor para varX, nos usaremos o
**@Input** do ***@angular/core*** com o metadado de nome com o nome da propriedade nova

~~~ javascript
@Input('getAtt') varY?: string;
~~~

Obs: o nome da propriedade pode ser qualquer um e também o próprio nome da
var. Caso eu queira declarar assim:

~~~ html
<selectorY [varY]="this.varX"></selectorY>
~~~

Basta não adicionar nenhum metadado de nome no ***@Input***

~~~ javascript
@Input() varY?: string;
~~~

