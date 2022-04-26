import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
private backgroundColor?: string;
  constructor() { }

  @HostListener('mouseleave')onMouseLeave(){
this.backgroundColor = 'white';
  }

  @HostListener('mouseover')onMouseOver(){
    this.backgroundColor = 'yellow';
      }

  @HostBinding('style.backgroundColor') get color(){
    return this.backgroundColor;
  }

}
