# Output

Pode fazer emissão(output) de Evento quando declara o método **emit(***param***)**
e seu param pode ser any objeto. 

~~~ javascript
valueChanged = new EventEmitter();

valueChanged.emit(object);
~~~

no objeto de emitir o valor adicionamos o ***@Output('name')*** para dar output
desse valor a quem utilizar o selector do component emissor.
~~~ javascript
@Output('emitValue') valueChanged = new EventEmitter();
~~~

No selector ficar assim:
~~~ html
<componentX (emitValue)="functionReceptorEmission()"></componentX>
~~~

Toda vez que o método emit for disparado no component o seu selector também
dispara o evento assim rodando a function do component que recebeu o output.

    Obs: a function functionReceptorEmission() sera do component que esta recebendo
    o selector que emit.
