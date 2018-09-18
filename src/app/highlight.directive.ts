import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highest:boolean;
  constructor(private el: ElementRef) {}
  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

   @HostListener('mouseenter') mouseEnter(){
     if(this.highest){
      this.highlight('yellow');
     }
   }

   @HostListener('mouseleave') onMouseLeave() {
     if(!this.highest){
      this.highlight(null);
     }
   }
}
