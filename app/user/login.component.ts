import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css']
})
export class LoginComponent implements OnInit {
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if(!resp){
                this.loginInvalid = true;
            }
            else{
                this.router.navigate(['events']);
            }
        });        
    };

    cancel(){
        this.router.navigate(['events']);
    };
};