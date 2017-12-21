import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './app/events/create-event-component.html'
})

export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    
    constructor(private router: Router) { }

    ngOnInit() { }

    goToEvents() {
        this.router.navigate(['/events']);
    }
}