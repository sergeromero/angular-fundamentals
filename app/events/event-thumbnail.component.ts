import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './app/events/event-thumbnail.component.html',
    styleUrls: ['./app/events/event-thumbnail.component.css']
})

export class EventThumbnailComponent implements OnInit {
    @Input() event: IEvent;

    constructor() { }

    ngOnInit() { }

    getStartTimeClass(){
        //on template do the binding like so: [ngClass]="getStartTimeClass()"
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }
    
    getStartTimeStyle() : any {
        //on template do the binding like so: [ngStyle]="getStartTimeStyle()"
        if (this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'};
        
        return {};
    }; 
}