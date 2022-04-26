import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent  {

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
