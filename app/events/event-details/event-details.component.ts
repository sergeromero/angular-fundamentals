import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../index';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css'],
})

export class EventDetailsComponent implements OnInit {
    public event: IEvent;
    public addMode: boolean;
    public filterBy: string;
    public sortBy: string;

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    public ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data.event;
            this.addMode = false;
            this.filterBy = 'all';
            this.sortBy = 'votes';
        });
    }

     public addSession() {
         this.addMode = true;
     }

     public saveNewSession(session: ISession) {
         const nextId = Math.max.apply(null, this.event.sessions.map((s) => s.id));

         session.id = nextId + 1;
         this.event.sessions.push(session);

         this.eventService.updateEvent(this.event).subscribe();
         this.addMode = false;
     }

     public displaySessions() {
         this.addMode = false;
     }
}
