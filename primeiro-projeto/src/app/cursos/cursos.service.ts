import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getNomePortal() {
    return "Loiane Trainer";

  }
  getCursos() {
    return ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];
  }

}
