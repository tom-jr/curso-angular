

Nos utilizaremos o **HostListener** quando quisermos definir uma função relacionada a diretiva.
O HostListener vai ficar ouvindo Eventos do elemento. Podemos criar quantos quisermos.

~~~ javascript
@HostListener('eventFunction()') function(){}
~~~

Na propria função podemos modificar os att do Elemento que usa a diretiva. E
para facilitar a customização entramos com o ***@HostBinding***
Onde podemos fazer bind de um atributo de elemento. Assim poder usar esse bind nos
métodos HostListener. O exemplo facilita a compreensão


~~~ javascript
@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

backgroundColor?: string;
  constructor() { }

  @HostListener('mouseleave')onMouseLeave(){ // ouvindo o evento mouseleave e executando o método

this.backgroundColor = 'white';
  }

  @HostListener('mouseover')onMouseOver(){
    this.backgroundColor = 'black';
      }

  @HostBinding('style.backgroundColor') get color(){
      return this.backgroundColor;
  }

}
~~~