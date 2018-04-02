import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './app/events/event-thumbnail.component.html',
    styleUrls: ['./app/events/event-thumbnail.component.css'],
})

export class EventThumbnailComponent implements OnInit {
    @Input() public event: IEvent;

    constructor() { }

    public ngOnInit() { }

    public getStartTimeClass() {
        // on template do the binding like so: [ngClass]="getStartTimeClass()"
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }

    public getStartTimeStyle(): any {
        // on template do the binding like so: [ngStyle]="getStartTimeStyle()"
        if (this.event && this.event.time === '8:00 am') {
            return {'color': '#003300', 'font-weight': 'bold'};
        }

        return {};
    }
}
