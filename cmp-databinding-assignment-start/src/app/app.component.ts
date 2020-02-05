import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static EVEN: string  = 'even';
  private static ODD: string = 'odd';
  private divs: Array<{type: string, value: number}> = [];

  private static isEven(numb: number): boolean {
    return numb % 2 === 0;
  }

  public onStarted(increment: number) {
    if (AppComponent.isEven(increment)) {
      this.divs.push({type: AppComponent.EVEN, value: increment});
    } else {
      this.divs.push({type: AppComponent.ODD, value: increment});
    }
  }

}
