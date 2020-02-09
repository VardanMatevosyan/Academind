import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTextCenter]'
})
export class TextCenterDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.textAlign = 'center';
  }

}
