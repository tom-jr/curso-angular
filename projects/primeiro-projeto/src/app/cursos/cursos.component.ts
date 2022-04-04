import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

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
    console.log(this.nomePortal);
  }

}
