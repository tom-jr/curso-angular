# Serviços

## O que é
Nos utilizamos o serviço para que não tenha a necessidade de 
deixar toda a logica a cargo do template.
O template fica a cargo da interação com usuário. Deixando chamadas de servidor
e validações com a class de serviço

esquema ideal de fluxo de dados e logica.

![img](/docs/assets/img/intro_008.png)

## Criar um service

Gera o service no diretório explicito, caso não explicitar
o serviço é alocado na pasta raiz do projeto.
~~~ bash
$ ng g service dir/name_service 
~~~

Feito o serviço atribuiremos todas as logicas que cabem a ele. 

## Demostração de injeção

vamos adicionar em nosso serviço uma simulação de chamada ao servidor
que espera como retorno uma lista de cursos.

~~~ javascript
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  
  nomePortal:string = "Loiane Trainer";
  cursos: string[] = ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];
 
}

~~~

Vamos utilizar a injeção de dependência para poder adicionar uma instancia
do serviço no template.
O que nos possibilita a fazer essa injeção é o decorator ***@Injectable***

A injeção sera feita via **constructor**:
No paramento do construtor adicionamos uma instancia do service

~~~ javascript
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  nomePortal: string = '';

  constructor(private cursosService: CursosService) {

    this.cursos = this.cursosService.getCursos();
    this.nomePortal = this.cursosService.getNomePortal();
  }


  ngOnInit(): void {
  }

}
~~~