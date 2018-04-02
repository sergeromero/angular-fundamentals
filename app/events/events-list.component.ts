import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './index';
import { EventService } from './shared/event.service';

@Component({
    templateUrl: 'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {
    public events: IEvent[];

    constructor(private eventService: EventService,
                private route: ActivatedRoute) {}

    public ngOnInit() {
      this.events = this.route.snapshot.data.events;
    }
}
