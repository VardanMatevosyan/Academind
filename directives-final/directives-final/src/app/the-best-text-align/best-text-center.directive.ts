import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBestTextCenter]'
})
export class BestTextCenterDirective implements OnInit {
  @Input() defaultTextAlign: string = 'left';
  @Input('appBestTextCenter') right: string = 'right';
  @HostBinding('style.textAlign') textAlign: string;
  constructor() { }
  ngOnInit(): void {
    this.textAlign = this.defaultTextAlign;
  }

  @HostListener('mouseenter') mouseOver(event: Event) {
    this.textAlign = this.right;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.textAlign = this.defaultTextAlign;
  }

}
