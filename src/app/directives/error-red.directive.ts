import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorRed]'
})
export class ErrorRedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
   }

}
