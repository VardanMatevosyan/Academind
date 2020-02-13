import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  userHistoryState: Map<string, {setToActive: number, setToInActive: number}> = new Map();
  ACTIVE: string = 'Active';
  INACTIVE: string = 'Inactive';
  constructor() { }

  countInactive(userName: string) {
    this.count(this.INACTIVE, userName);
  }

  countActive(userName) {
    this.count(this.ACTIVE, userName);
  }

  count(status: string, userName: string) {
    const activityStatus = this.userHistoryState.get(userName);
    if (activityStatus !== undefined && activityStatus != null) {
      status === this.ACTIVE ? activityStatus.setToActive++ : activityStatus.setToInActive++;
      this.userHistoryState.set(userName, activityStatus);
    } else if (status === this.ACTIVE) {
      this.userHistoryState.set(userName, {setToActive: 1, setToInActive: 0});
    } else if (status === this.INACTIVE) {
      this.userHistoryState.set(userName, {setToActive: 0, setToInActive: 1});
    }
  }
}
