import { Injectable } from '@angular/core';
import { Aluno } from './models/aluno.model';

@Injectable()
export class AlunosService {

  alunos: Aluno[] = [
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
    let aluno: Aluno = new Aluno();
    for (let i = 0; i < this.alunos.length; i++) {
      aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return aluno;
  }
}
