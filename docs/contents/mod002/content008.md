
para que possamos acessar ao DOM com o ViewChild utilizamos
a variáveis de elemento  --> 
~~~ html
 <tag #varElement></tag>
~~~

para pegar esse Elemento Nos criaremos uma variável e vincularemos
a variável do component com a do element

~~~ javascript
@ViewChild('varElement') element: ElementRef;
~~~

Agora as propriedades da tag HTML estão atribuídas a variável element

