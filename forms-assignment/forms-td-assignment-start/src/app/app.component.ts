import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f', {static: false}) form: NgForm;
  subscriptions: Array<Subscription> = new Array<Subscription>();
  defSubscription: String;
  userInputs;
  submitted = false;

  ngOnInit(): void {
    this.subscriptions.push({name: 'Basic', default: false});
    this.subscriptions.push({name: 'Pro', default: false});
    this.subscriptions.push({name: 'Advanced', default: true});

    this.subscriptions.forEach(subscription => {
      if (subscription.default) {
        this.defSubscription = subscription.name;
      }
    });

    this.userInputs = {
      email: '',
      subscription: this.defSubscription,
      password: ''
    };
  }


  constructor() {}

  onSubmit() {
    this.submitted = true;
    this.userInputs.email = this.form.value.userData.email;
    this.userInputs.subscription = this.form.value.userData.subscription;
    this.userInputs.password = this.form.value.userData.password;

    this.form.reset();
    this.form.form.patchValue({
      userData: {
      subscription: this.defSubscription,
    }});
  }
}

interface Subscription {
  name: String;
  default: boolean;
}
