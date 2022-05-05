import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid-field',
  templateUrl: './invalid-field.component.html',
  styleUrls: ['./invalid-field.component.scss']
})
export class InvalidFieldComponent implements OnInit {

  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }

}
