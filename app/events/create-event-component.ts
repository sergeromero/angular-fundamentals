import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: './app/events/create-event-component.html',
    styleUrls: ['./app/events/create-event-component.css']
})

export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    
    constructor(private eventService: EventService, private router: Router) { };

    ngOnInit() { };

    goToEvents() {
        this.router.navigate(['/events']);
    };

    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.goToEvents();
    };

    cancel(){
        this.goToEvents();
    };
};