import { Injectable } from '@angular/core';
import { Curso } from './models/curso.model';

@Injectable()
export class CursosService {

  cursos: Curso[] = [
    { curso: 'Java', id: 1 },
    { curso: 'Javascript', id: 2 },
    { curso: 'Angular', id: 3 },
    { curso: 'SpringBoot', id: 4 },
  ];
  constructor() { }

  getCursos() {
    return this.cursos;
  }

  getCurso(id: number) {
    let curso = new Curso();
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].id == id) {
        curso = this.cursos[i];
      }
    }
    return curso;
  }
}
