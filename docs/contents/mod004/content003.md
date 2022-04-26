

Exported from : CommonModule

Selectors? [ngSwitch]

Properties
- @Input()
- ngSwitch: any

## Descrição
Define um elemento para a diretiva, e especifica a expressão:

~~~ html
<container-element [ngSwitch]="switch_expression">
~~~

Dentro do container as instruções NgSwitchCase especificam as expressões de correspondência como atributos. Inclua 
NgSwitchCaseDefault como caso final.


~~~ html
<container-element [ngSwitch]="switch_expression">
   <some-element *ngSwitchCase="match_expression_1">...</some-element>
...
   <some-element *ngSwitchDefault>...</some-element>
</container-element>
~~~

~~~ html
<container-element [ngSwitch]="switch_expression">
        <some-element *ngSwitchCase="match_expression_1">...</some-element>
        <some-element *ngSwitchCase="match_expression_2">...</some-element>
        <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
        <ng-container *ngSwitchCase="match_expression_3">
            <!-- use a ng-container to group multiple root nodes -->
            <inner-element></inner-element>
            <inner-other-element></inner-other-element>
        </ng-container>
      <some-element *ngSwitchDefault>...</some-element>
</container-element>
~~~