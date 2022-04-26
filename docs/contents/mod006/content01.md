# Pipes

Pipes transformam valores para podermos mostrar dentro de um template

Pipes para formatar datas
Pipes para apresentar objetos em formato JSON
Pipes para trabalhar com números
Pipes para trabalhar com moedas
Entre outros

'**|**' Este simbolo é o **pipe**.

quando desejamos adicionar um piper fazemos do seguinte modo

~~~ html
<p>{{att |pipe1}}</p>
~~~

Dessa forma sera aplicado o Pipe.
Os pipes são aplicado na ordem de esquerda para a direita quando se aninha pipes:


~~~ html
<p>{{att | pipe1 | pipe2 | pipe3}}</p>
~~~


## Criar um PIPE

~~~ bash
ng g pipe name-pipe
~~~

Assim que cria o  Pipe ele vai para o declarations do module automaticamente.
O pipe vem com um método chamado transforme, onde configuramos as mudanças que ele realiza.

~~~ javascript
@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let result = '';

    for (let v of values){
      result += this.capitalize(v) + ' ';
    }    
    return result;
  }

  capitalize(v: string){
    return v.substring(0,1).toUpperCase() +
    v.substring(1).toLowerCase();
  }
}
~~~