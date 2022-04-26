import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent {
  active: boolean = false;

  constructor() { }

  changeAttributes() {
    this.active = !this.active;
  }

}
