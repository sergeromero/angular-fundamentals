import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent } from '../index';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.event = this.eventService.getEventBy(id);
     }
}