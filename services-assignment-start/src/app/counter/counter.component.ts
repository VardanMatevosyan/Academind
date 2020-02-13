import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  usersActivity: Map<string, {setToActive: number, setToInActive: number}>;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.usersActivity = this.counterService.userHistoryState;
  }

}
