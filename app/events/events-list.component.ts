import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './index';

declare let toastr: any;

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService,
        private route: ActivatedRoute,
        private toastrService: ToastrService) {}

    ngOnInit() {
      this.events = this.route.snapshot.data['events'];
    }
/*
    displayMessage(eventName: string){
        this.toastrService.success(eventName);
    }
*/
}