import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal:string = "Loiane Trainer";
  cursos: string[] = ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];
  constructor() { }

  ngOnInit(): void {
  }

}
