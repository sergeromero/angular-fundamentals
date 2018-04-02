import { Component, OnInit } from '@angular/core';
import { ISession } from '../events/shared/index';
import { EventService } from '../events/shared/index';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/nav.component.html',
    styleUrls: ['./app/nav/nav.component.css'],
})

export class NavBarComponent implements OnInit {
    public searchTerm: string = '';
    public foundSessions: ISession[];

    constructor(private auth: AuthService, private eventService: EventService) { }

    public ngOnInit() { }

    public searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
            this.foundSessions = sessions;
        });
    }
}
