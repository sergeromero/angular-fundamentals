import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];
    
    constructor() { };
    
    ngOnInit() { };

    ngOnChanges(/*changes: SimpleChanges*/): void {
        if(!this.sessions) return;

        this.filterSessions(this.filterBy);
    };

    filterSessions(filter: string){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
            console.log(this.visibleSessions);
        }
        else{
            this.visibleSessions = this.sessions.filter(s => {
                return s.level.toLocaleLowerCase() === filter;
            });
        }
    };
};