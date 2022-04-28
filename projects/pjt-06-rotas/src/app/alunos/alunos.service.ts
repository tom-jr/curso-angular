import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  alunos = [
    { id: 1, nome: 'Aluno001', email: 'generic001@email.com' },
    { id: 2, nome: 'Aluno002', email: 'generic002@email.com' },
    { id: 3, nome: 'Aluno003', email: 'generic003@email.com' },
    { id: 4, nome: 'Aluno004', email: 'generic004@email.com' }
  ]
  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAlunoById(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
