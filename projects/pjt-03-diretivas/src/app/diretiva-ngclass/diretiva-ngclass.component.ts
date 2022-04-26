import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent  {

  myFavorite:boolean = false;
  constructor() { }

  changeValue(){
    this.myFavorite = !this.myFavorite;
  }

}
