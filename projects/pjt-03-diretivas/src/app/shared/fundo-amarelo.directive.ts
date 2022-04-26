import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(el.nativeElement,'backgroundColor','yellow');
  }

}
