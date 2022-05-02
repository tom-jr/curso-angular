import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../models/aluno.model';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{

  constructor(private alunosService: AlunosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Aluno | Observable<Aluno> | Promise<Aluno> {

    let id = route.params['id'];
    let aluno: Aluno = this.alunosService.getAlunoById(id);
    return aluno;
  }
}
