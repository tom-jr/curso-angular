import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input('getValue') valor: number = 0;

  @ViewChild('inputField') element!: ElementRef;

 @Output('throwOutput') valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    this.element.nativeElement.value ++
    this.valueChanged.emit({ newValue: this.element.nativeElement.value });
  }

  sub() {
    this.element.nativeElement.value --
    this.valueChanged.emit({ newValue:  this.element.nativeElement.value  });
  }

}
