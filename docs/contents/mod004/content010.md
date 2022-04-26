
## Input e propertyBind em Diretivas

Adicionar propertyBind nas diretivas:

~~~ html
<p [highlight]="'grey'" [highlightColor]="'yellow'">Texto com highlight</p>
~~~

~~~ javascript
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

~~~