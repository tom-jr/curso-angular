##
São formas de se passar instruções para o template, dando bastante poder para o template

Ex: 

~~~ html
<ul>
    <li *ngFor = "let curso of cursos">{{curso}}</li>
</ul>
~~~

Neste exemplos utilizamos a diretiva ngFor. Ela irar criar o elemento li para cada index
existente do array cursos e renderizar o mesmo.

## Tipos de diretivas

**Diretivas Estruturais**: Interagem com a view e modificam a estrutura do DOM e/ou código HTML [*ngFor, *ngIf]
**Diretivas de Atributos**: Interagem com o elemento em que foram aplicadas.  [ng-class, ng-style]