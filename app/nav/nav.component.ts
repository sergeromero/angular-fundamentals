import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/index';
import { EventService } from '../events/shared/index';

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/nav.component.html',
    styleUrls: ['./app/nav/nav.component.css']
})

export class NavBarComponent implements OnInit {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private auth: AuthService, private eventService: EventService) { }

    ngOnInit() { }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    };
};