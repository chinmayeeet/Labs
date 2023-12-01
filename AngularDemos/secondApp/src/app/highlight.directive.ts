import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private hostEl: ElementRef) { 
    hostEl.nativeElement.style = "background-color:yellow";
  }
@HostBinding('style.color') borderColor!:any;
@HostListener('mouseenter')
  public onEnter(){
    this.hostEl.nativeElement.style = "background-color:pink";
    this.borderColor = "white"
  }
@HostListener('mouseleave')
 public onLeave(){
  this.hostEl.nativeElement.style = "background-color:chartreuse";
 }
}
