import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    login(formValue){
        console.log(formValue);
    }
}