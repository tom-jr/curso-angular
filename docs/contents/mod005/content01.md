# **service**s

Ja entendemos o que é **service** nos módulos anteriores.
Para que toda a Logica do sistema não fique a cargo apenas do component
nos dividimos as logicas que podem ser comum(consumidos) por outros componente.

Por styleGuide injetamos o **service** no construtor do component que deseja consumir seus serviços


Mas para que o **service** seja usados devemos ou

- Declarar no decorator @Injectable do **service** o metadado de providedIn com o valor de root

~~~ javascript
@Injectable({
    providedIn:'root'
})
export class Service{

constructor(){

}
}
~~~

Assim o **service**  poderá ser consumido por qualquer class que a injetar e terá no projeto uma só instancia.


- Declarar no metadado **providers** do module em que deseja usar, assim, toda class daquele modulo poderá
utilizar a instancia única daquele **service**.


- Declarar no metadado **providers** de determinado component. Assim, terá uma instancia única para cada class que
importar.


## Emitir eventos de Service
Quando quisermos emit um evento do de um service utilizaremos o EventEmit:

~~~ javascript
@Output() event = new EventEmitter();


function x(object){

    event.emit(object);
}
~~~

A classe para que possa capturar esse event tem que esta de alguma forma associada
ao component que fez com que o service disparasse o event. A mais comum é o componente que
deseja receber a emissão do evento esteja com o selector declarado no template do emissor.


Então para a class poder ler o evento ela deve subscrever-se. Assim fica ouvindo mudanças do
service, podendo realizar funções que tratam o objetos lançados e realizar suas logicas sobre eles.

~~~ javascript
ngOnInit(){
    this.service.event.subscribe((objectEmitted)=>{
        //code
        });
}
~~~

Caso queiramos ouvir o evento de uma class sem associação, fazemos outro atributo de emissão no service
mas sendo estático, assim, podemos criar um subscribe que ouvi o atributo static. 
