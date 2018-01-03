import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/nav.component.html',
    styleUrls: ['./app/nav/nav.component.css']
})

export class NavBarComponent implements OnInit {
    constructor(private auth: AuthService) { }

    ngOnInit() { }
}