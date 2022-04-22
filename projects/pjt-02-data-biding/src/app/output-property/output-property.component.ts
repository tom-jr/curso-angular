import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() getValue?: number;

  @ViewChild('inputField') inputField!: ElementRef;

 @Output() throwOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('Not Empty')
  }

  sum() {
    this.inputField.nativeElement.value ++
    this.throwOutput.emit({ newValue: this.inputField.nativeElement.value });
  }

  sub() {
    this.inputField.nativeElement.value --
    this.throwOutput.emit({ newValue:  this.inputField.nativeElement.value  });
  }

}
