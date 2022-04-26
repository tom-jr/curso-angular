# NgFor

Uma diretiva estrutural que renderiza um modelo para cada item em uma coleção. A
diretiva é colocada em um elemento que se torna o pai dos modelos clonado.

Exported from: CommonModule

Selector: [ngFor] [ngForOf]

**Descrição**
A diretiva ngForOf é geralmente usada na forma abreviada *ngFor. 
Nesse formulário, o modelo a ser renderizado para cada iteração é o 
conteúdo de um elemento âncora que contém a diretiva.

Exemplo:

~~~ html
<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
~~~

A forma abreviada pode se expandir em uma forma longa que usa o selector ngForOf em um elemento
<ng-template>. O conteúdo do ng template é o <li> que contem a diretiva de forma curta.

~~~ html
<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
  <li>...</li>
</ng-template>
~~~