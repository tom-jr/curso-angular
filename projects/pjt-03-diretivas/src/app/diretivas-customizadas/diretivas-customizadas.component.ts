import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent {

  cursos: string[] = [];
  constructor() { }

  changeRecords() {
    if (this.cursos.length > 0) {
      this.cursos = [];
    } else {
      this.cursos = ['Java', 'Javascript', 'Angular', 'Spring Boot'];
    }
  }
}
