# NgContent
 O ng Content é uma forma de se passar um elemento para outro elemento. Fica mais fácil explicar
com exemplo pratico.

Eu tenho um componente no qual criei
E quero passar outros componentes ou elementos DOM para que ele use.
O ideal é identificar os elementos com classes, assim o ng-content consegue distinguir
e organizar de acordo com o necessário.
~~~ html
<componente-personalizado>
    <div class = classX>ContentX</div>
    <div class = classY>ContentY</div>
</componente-personalizado>
~~~

no template de componente-personalizado capturamos esses elementos
com o ***ng-content***:

~~~ html
<ng-content select=".classX">
<ng-content select=".classY">
~~~

Assim os conteúdos serão renderizados de acordo com o **select** que se 
refere a class.
