## Template

com ng-template podemos definir o conteúdo do modelo que só esta sendo renderizado pelo 
Angular quando voce, direta ou indiretamente, o instruir especificadamente a faze-lo, permitindo 
que voce tenha controle total sobre como e quando o conteúdo é exibido



Reescrever *ngIF com o ng-template:

~~~ html
<div *ngIf="expression" >
    <div>content</div>
</div>
~~~

~~~ html
<ng-template [ngIf]="expression" >
    <div>content</div>
</ng-template>
~~~

Reescrever *ngFor com ng-template:
~~~ html
<ul>
    <li *ngFor="let item of cursos let i = index">{{i+1}}- {{item}}</li>
</ul>
~~~


~~~ html
<ul>
    <ng-template ngFor [ngForOf]="cursos" let-item let-i="index">
        <li>{{i+1}}- {{item}}</li>
    </ng-template>
</ul>
~~~