import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { curso: 'Java', id: 1 },
      { curso: 'Javascript', id: 2 },
      { curso: 'Angular', id: 3 },
      { curso: 'SpringBoot', id: 4 },
    ];
  }

  getCurso(id: number) {

    return this.getCursos().find((item) => item.id == id);
  }
}
