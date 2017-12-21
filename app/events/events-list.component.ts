import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr: any;

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventService: EventService,
    private toastrService: ToastrService) {}

    ngOnInit() {
      this.eventService.getEvents().subscribe(events => {
        this.events = events;
      });
    }
/*
    displayMessage(eventName: string){
        this.toastrService.success(eventName);
    }
*/
}