import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextBetterCenter]'
})
export class TextCenterBetterDirective implements OnInit {

  constructor(private elemRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {

  }

  @HostListener("mouseenter") mouseOver(event: Event) {
    this.render.setStyle(this.elemRef.nativeElement, "textAlign", "center");
  }

  @HostListener("mouseleave") mouseLeave(event: Event) {
    this.render.setStyle(this.elemRef.nativeElement, "textAlign", "left");
  }


}
