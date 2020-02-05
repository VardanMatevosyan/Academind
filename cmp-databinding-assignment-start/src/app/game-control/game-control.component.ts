import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGameEvent: EventEmitter<any> = new EventEmitter<any>();
  private increment = 1;
  private interval: number;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(this.emmitTheStartGameEvent, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

  emmitTheStartGameEvent = () => this.startGameEvent.emit(this.increment++);

}
