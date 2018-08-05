import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics = ['Angular', 'React', 'Vue'];
 designations = ['SD', 'Account', 'SSD', 'Manager'];
 departments = ['HR', 'MG', 'TL', 'AC'];
 topicHasError = true;
 submitted = false;
 errorMsg = '';  
 
 citys = ['Ongole', 'Nellore', 'Kadapa', 'Anatapur'];
 states = ['AP', 'KA', 'TS', 'TN'];
 countrys = ['INDIA', 'USA', 'AU', 'SINGAPOOR']

 userModel = new User('', '', 100000, 'xxxxxx@gmail.com',  9999999999, 'default', 'morning', true);
 
 constructor(private _enrollmentService: EnrollmentService) {}

validateTopic(value) {
  if (value === 'default') {
    this.topicHasError = true;
  } else {
    this.topicHasError = false;
  }
 }
 
 onSubmit() {
   this.submitted = true;
   this._enrollmentService.enroll(this.userModel)
     .subscribe(
       data => console.log('Success!', data),
       error => this.errorMsg = error.statusText
       
     )
     //console.log("Hello i'm waiting");
   }
}
