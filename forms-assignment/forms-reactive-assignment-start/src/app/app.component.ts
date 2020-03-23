import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reactiveForm: FormGroup;
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  forbiddenNames: string[] = ['Test', 'Sync'];

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'userData': new FormGroup({
        'projectName': new FormControl(null,
          [Validators.required, this.validateForbiddenNames.bind(this)],
          this.validateAsyncForbiddenNames.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl(this.projectStatus[0], Validators.required)
      })
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  validateForbiddenNames(formControl: FormControl): {[s: string]: boolean} {
    if (formControl.value === this.forbiddenNames[1]) {
      return {'forbiddenName': true};
    } else {
      return null;
    }
  }

  validateAsyncForbiddenNames(formControl: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenNames.indexOf(formControl.value) !== -1) {
          resolve({'forbiddenName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

}
