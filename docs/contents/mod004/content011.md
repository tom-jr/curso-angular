## Criar Diretiva ngElse

para criar a diretiva ngElse

- Criar uma diretiva para representar o o ng else
- criar um @Input na diretiva que mapeie uma property que recebe um
parâmetro, que é a expressão que se usa nas diretivas
~~~ javascript
@Input('directive') set directive(expression: boolean){

}
~~~

Utilizaremos duas class do angular, o templateRef e viewContainerRef para 
trabalhar na renderização do components onde será utilizada a diretiva

~~~ javascript

  @Input('ngElse') set ngElse(expression: boolean){
    if(!expression){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
~~~

Com essa logica aplica da, toda vez que uma expressão for passada no ngElse sera verificada se é true ou 
false e renderizará o elemento e seus children de acordo com o result da expressão.

