import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  @Input() getAttribute?: string; 
  constructor() { }

  ngOnInit(): void {
    console.log('Not Empty');
  }

}
