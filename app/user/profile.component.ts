import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styleUrls: ['app/user/profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(private auth: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: IToastr) {}

  public ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  public saveProfile(formValues) {
    if (!this.profileForm.valid) { return; }

    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
      this.toastr.success('Profile saved');
    });
    // this.router.navigate(['events']);
  }

  public cancel() {
    this.router.navigate(['events']);
  }

  public validateLastName() {
    return this.lastName.valid ||
      this.lastName.untouched;
  }

  public validateFirstName() {
    return this.firstName.valid ||
      this.firstName.untouched;
  }

  public logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
