import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input('highlight') highlight?: string;
  @Input() highlightColor?: string;

  private backgroundColor?: string;
  constructor() { }
  ngOnInit(): void {
    this.backgroundColor = this.highlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.highlight;
  }

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostBinding('style.backgroundColor') get color() {
    return this.backgroundColor;
  }


}
