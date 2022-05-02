import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CursosService } from '../cursos.service';
import { Curso } from '../models/curso.model';

@Injectable()
export class CursoDetalheResolve implements Resolve<Curso>{

  constructor(private cursosService: CursosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {

    let id = route.params['id'];
    let curso: Curso = this.cursosService.getCurso(id);
    return curso;
  }
}
