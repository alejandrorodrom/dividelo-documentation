import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @Output() outsideClick = new EventEmitter<boolean>();

  constructor(private el: ElementRef) { }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.outsideClick.emit(true);
    }
  }
}
