# Criar directive

Utilizamos o comando do CLI:
~~~ bash
ng g directive name-directive
~~~

A diretiva e criada e adicionada ao declaration do root component.

A estrutura inicial da diretiva :

~~~ javascript

@Directive({
    selector:'[name-directive]'
})
export class NameDirective{

    constructor(){}
}
~~~

O decorator @Directive é do AngularCore.
ele tem um metadado chamado **selector**, o qual é entre coxetes.
identifica o alias para usar essa directive em algum elemento/component DOM
Caso adicionarmos no selector um prefixo com um selector de um elemento DOM ou um component
essa diretiva so ira funcionar com esse tipo de elemento:

~~~ javascript
selector:'p[name-selector]'
~~~



Para que seja aplicado customização no elemento que for utilizar essa diretiva vamos seguir os 
passos:

injetamos pelo construtor o ElementRef

~~~ javascript

@Directive({
    selector:'[name-directive]'
})
export class NameDirective{

    constructor(private elemento: ElementRef){}
}
~~~

Agora vamos injetar mais uma class que sera a responsável pela customização
o Renderer2

~~~ javascript

@Directive({
    selector:'[name-directive]'
})
export class NameDirective{

    constructor(private elemento: ElementRef, private renderer Renderer2){}
}
~~~

Então no corpo do construtor iremos chamar o método do renderer para realizar 
qualquer alteração a ser disponibilizada pela Diretiva.


~~~ javascript

@Directive({
    selector:'[name-directive]'
})
export class NameDirective{

    constructor(private elemento: ElementRef, private renderer Renderer2){}
    this.renderer.setStyle(elemento.nativeElement,'backgroundColor','yellow');
}
~~~