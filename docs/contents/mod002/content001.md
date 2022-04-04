# Property Binding e Interpolação

## Data Binding
Associar informações que estão no component e vice-versa

**Interpolação**: Pegar o valor de um método ou atributo e alterar a Saida em um template
|Template| ---- {{valor}} ----> |Component|

***Property bind***: Saida de atributo de um component para um template
|Template| ---- [propriedade]= "valor" ----> |Component|


**EventHandler**: Escutar evento do template
|Template| ---- (event) = "handler" ----> |Component|

**To way data binding**: Templante e component atualizado simultaneamente.
|Template| ---- [(ngModel)] ="propriedade" ----> |Component|

## Interpolação

Exemplo:

Criamos um (atributo|retorno de método) no nosso component 

~~~ javascript
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  url: string = "loiane.com";//atributo a ser interpolado
  ngOnInit(): void {
  }

}
~~~

Para renderizar esse atributo em Angular nos utilizaremos o 
a interpolação  **{{}}** Se baseia em colocar o atributo entre duas
chaves, assim renderizando seu valor no template.

~~~ html
<section class="property-binding">
    <article>
        <h3>Interpolation/Interpolação</h3>
        <p>String renderizada com Interpolação: {{ url }}</p>
    </article>
</section>
~~~

Saida:
![img](/docs/assets/img/data-binding_001.png)


Na  interpolação é possível adicionar expressões logicas e matemáticas.


~~~ html
        <p>String renderizada com Interpolação: {{ 1 +1 }}</p>
        //irá renderizar o valor da expressão no template 
~~~

Podemos declarar o valor de uma propriedade com interpolação

Ex:
~~~ html
<img src ="{{urlImagem}}">
~~~

# Property binding

No property binding o funcionamento vai ser parecido com interpolação
, porem não há necessidade de por o valor do atributo entre chaves
e sim o nome da propriedade do template entre colchetes
~~~ html
<img [src] ="urlImagem">
// codigo equivalente a 
<img bind-src ="urlImagem">

~~~
- Valor do componente para o template
- Usa-se colchetes [src]= "value"
- Formato padrão é através de bind-property_name bind-src = "value"
- Quando não existe uma propriedade no elemento, usa-se [attr.colspan]



