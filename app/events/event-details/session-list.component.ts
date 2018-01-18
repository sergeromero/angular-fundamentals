import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];
    
    constructor() { };
    
    ngOnInit() { };

    ngOnChanges(/*changes: SimpleChanges*/): void {
        if(!this.sessions) return;

        this.filterSessions(this.filterBy);
        this.sortBy === 'name' 
            ? this.visibleSessions.sort(this.sortByNameAsc)
            : this.visibleSessions.sort(this.sortByVotesDesc);
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

    sortByNameAsc(x: ISession, y: ISession){
        if(x.name > y.name) return 1;
        else if(x.name === y.name) return 0;
        else return -1;
    };

    sortByVotesDesc(x: ISession, y: ISession){
        return y.voters.length - x.voters.length;
    };
};