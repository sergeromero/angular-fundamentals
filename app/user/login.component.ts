import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css'],
})
export class LoginComponent implements OnInit {
    public loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) { }

    public ngOnInit() { }

    public login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe((resp) => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events']);
            }
        });
    }

    public cancel() {
        this.router.navigate(['events']);
    }
}
