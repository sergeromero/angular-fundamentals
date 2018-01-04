import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styleUrls: ['app/user/profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, 
      [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  };

  saveProfile(formValues) {
    if(!this.profileForm.valid) return;

    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);    
    this.router.navigate(['events']);
  };

  cancel() {
    this.router.navigate(['events']);
  };

  validateLastName() {
    return this.lastName.valid || 
      this.lastName.untouched;
  };

  validateFirstName() {
    return this.firstName.valid || 
      this.firstName.untouched;
  }
};