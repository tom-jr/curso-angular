import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  valueActual?: string;
  savedValue?: string;

  constructor() { }
  url: string = "loiane.com";
  ngOnInit(): void {
  }

  changeValue() {

  }

  clicked() {
    alert('Im clicked!');
  }

  onKeyUp(event: string) {
    this.valueActual = event
  }

  save(event: string){
    this.savedValue = event;

  }
}
