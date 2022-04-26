# NgClass

O ng class é uma forma de se passar classesBind como objeto com varias regras

Ex de convencional:

~~~ html
<div 
[class.classX]="expression"
[class.classY]="expression"
[class.classZ]="expression"

></div>
~~~

Com o ngClass essa mesma logica pode ser reescrita de tal for,a

~~~ html
<div
[ngClass]="
{
    'classX': expression,
    'classY': expression,
    'classZ': expression
}
"
></div>
~~~


## NgStyle

O ngStyle vai funcionar do mesmo modo que ngClass.


~~~ html
<button class="btn btn-primary"
[style.backgroundColor]="this.active? 'blue':'red'"
[style.color]="this.active? 'white':'black'"
[style.fontWeight]="this.active? 'bold':'normal'"
[style.fontSize]="this.active? '24px':'34px'"

(click)="changeAttributes()"
>Change Atribute</button>
~~~



~~~ html
<button class="btn btn-primary"
[ngStyle]="{
    'backgroundColor': this.active? 'blue':'red',
    'color':this.active? 'white':'black',
    'fontWeight':this.active? 'bold':'normal',
    'fontSize':this.active? '24px':'34px'
}"
(click)="changeAttributes()"
~~~

## Elvis Operador

Quando utilizamos o operador Elvis '?' O angular faz uma logica interna de verificação

~~~ html
<div>
    {{this.var? this.var: ''}}
</div>
~~~

O mesmo código pode ser rescrito com a sintaxe simplificada

~~~ html
<div>
    {{this.var?}}
</div>
~~~

