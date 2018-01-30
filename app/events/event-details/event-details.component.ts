import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../index';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string;
    sortBy: string;
    
    constructor(private eventService: EventService, private route: ActivatedRoute) { };

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEventBy(+params['id']);
            this.addMode = false;
            this.filterBy = 'all';
            this.sortBy = 'votes';
        });

        //let id = +this.route.snapshot.params['id'];
        //this.event = this.eventService.getEventBy(id);
     };

     addSession() {
         this.addMode = true;
     };

     saveNewSession(session:ISession) {
         const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

         session.id = nextId + 1;
         this.event.sessions.push(session);
         
         this.eventService.updateEvent(this.event);
         this.addMode = false;
     };

     displaySessions() {
         this.addMode = false;
     }
};