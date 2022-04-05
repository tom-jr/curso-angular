# Event Binding

O event binding se trata do ato de capturar um evento que
ocorra em determinado elemento do template, de exemplo usaremos
um elemento button. 

~~~ html
<button (click)="function()" >Click Here</button>
~~~

No button foi adicionado o event biding de click
que representa que a function que esta no value ira
rodar assim que essa ação for disparada. A function
estará no component do template.

Novo exemplo utilizando um campo de input do type text
Vamos pegar o valor que esta sendo inputted
quando chamarmos o evento iremos passar um parâmetro
que se chamara '**$event**'. Necessário que na chamada
do método o parâmetro tenha o prefixo de cifrão ***$***

O Objeto do evento é do Tipo KeyboardEvent. Ele é um objeto
com muitas propriedades, mas a qual nos interessa no momento
é o path **target>value** que será onde estará o value inputted
no input do elemento.
Mas para acessar esse target temos que realizar algo parecido com 
o cast. Devido o target ser do tipo **HTMLInputElement**

(<HTMLInputElement>event.target).value

Dessa forma conseguimos dar um console.log no valor que esta no input
~~~ javascript
onKeyUp(event: KeyboardEvent) {
   
    console.log((<HTMLInputElement>event.target).value);
  }
~~~

Uma forma bem mais facilitada é utilizar a variável de elemento
#varName e passar o value da variável como parâmetro

~~~ html
<input type = "text" 
#varInput
(keyup) = "onKeyUp(varInput.value)"
/> 
~~~

e no Component.ts ja recebemos tipada como string, que é o mesmo
tipo que o value

~~~ javascript
onKeyUp(event: string){
    // code
}
~~~

