import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: './app/events/create-event-component.html',
    styleUrls: ['./app/events/create-event-component.css'],
})

export class CreateEventComponent implements OnInit {
    public isDirty: boolean = true;

    constructor(private eventService: EventService, private router: Router) { }

    public ngOnInit() { }

    public goToEvents() {
        this.router.navigate(['/events']);
    }

    public saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe((event) => {
            this.isDirty = false;
            this.goToEvents();
        });
    }

    public cancel() {
        this.goToEvents();
    }
}
