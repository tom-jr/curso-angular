import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input('getValue') valor: number = 0;

 @Output('throwOutput') valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    this.valor++;
    this.valueChanged.emit({ newValue: this.valor });
  }

  sub() {
    this.valor--;
    this.valueChanged.emit({ newValue: this.valor });
  }

}
