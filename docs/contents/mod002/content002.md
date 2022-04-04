# Class e Style Binding

## Instalar o BootStrap

Instala o bootStrap no diretório do projeto
~~~ bash
$ npm install bootstrap
~~~

Para configurar o uso do mesmo é necessário ir até o arquivo 
**angular.json** que é o arquivo de configuração do projeto Angular
no objeto JSON de options tem as chaves de style e scripts que tem como
valores um array. Em style adicionamos o caminho do arquivo ***bootstrap.min.css***
o path considera como se ja estivesse no node-modules. Então basicamente adicionamos 
**/bootstrap/...** --> ***"bootstrap/dist/css/bootstrap.min.css"***

O mesmo equivale para o script
***"bootstrap/dist/js/bootstrap.bundle.min.js"*** Adicione o value no array de scripts.

Agora o projeto pode utilizar-se do BootStrap tranquilamente.


## Class Binding


Variável local ***#name_var***

**EventHandle** quando o evento declarado acontecer a função que esta definida na mesma ira
executar
(event)="function"

**Class Binding**
[class.name_class] = "expression"

No class binding, o elemento html recebe as configurações daquela class informada
caso a expressão for satisfeita.

Ex:
~~~ html
A classe backgroundColorGreen deixa a div da cor verde. Mas será verde apenas se 
o attributor boolean for true
<div [class.backgroundColorGreen]= "attBoolean"> 

</div>
~~~

Podemos adicionar class por meio de interpolação. Ex
~~~ html
O classeSelected representa uma variável de elemento declarada no elemento select
o value de um select é a option selecionada.
<select #classeSelected>
<h2 class = "alert {{classeSelected.value}}">Cor de acordo com o valor do select </h2>

~~~

## Style Binding



ex:
Semelhante a classBinding. A certo style so sera adicionado se condição for satisfeita.
Abaixo diz que o style vai ter o display none ou block dependendo da condição da expressão
classeSelected.value == 'alert-info' 
~~~ html
<div class="alert " role="alert" [class.alert-info] = "classeSelected.value == 'alert-info'"
            [style.display]="classeSelected.value == 'alert-info' ? 'block':'none'"
            
            >
~~~



