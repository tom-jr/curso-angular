# Two way
O two way data binding é quando queremos manter
os valores atualizados no template e componente ao mesmo tempo

Vamos iniciar um exemplo de estrutura two way
vamos atribuir ao value do input a variável do component chamado
name
~~~ html
<input
[value]="name"
/>
~~~

No caso se voce mudar o valor do input a var não ira mudar o seu
para que ocorra essa atualização usamos o **(input)** onde podemos 
disparar uma função a qualquer mudança no elemento DOM. No caso vamos 
lançar um function com o próprio value de parâmetro e atribuir o valor 
a variável  name.

~~~ html
<input #var1
[value]="name"
(input)="bindingValue(var1.value)" 
/>


<p>Name: {{this.name}}</p> 
 <!-- Nome sera renderizado, e cada evento de (input) que lançar atualizará o mesmo  Assim caraterzirá o two way!-->

~~~




Pode-se utilizar o **ngModel** no lugar do value, ele funcionara para o mesmo 
proposito
E no lugar de (input) pode se usar o **ngModelChange**

Para utilizar as diretivas, ngModelChange e ngModel é necessário que importemos
no module dos templates o **FormModules** do pacote ***@angular/forms***

~~~ html
<input
[ngModel]="var"
(ngModelChange)= "addName(var.value)"
/>
~~~

Para deixar a sincronização sem precisar usar duas diretivas, podemos utilizar 
o **[(ngModel)]** do AngularForms que faz com que voce tenha o two way dessa forma mais simples

~~~ html
<input
[(ngModel)]="this.name"
/>
~~~