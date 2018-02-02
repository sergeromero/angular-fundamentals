import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];
    
    constructor(private voterService: VoterService, private auth: AuthService) { };
    
    ngOnInit() { };

    ngOnChanges(): void {
        if(!this.sessions) return;

        this.filterSessions(this.filterBy);
        this.sortBy === 'name' 
            ? this.visibleSessions.sort(this.sortByNameAsc)
            : this.visibleSessions.sort(this.sortByVotesDesc);
    };

    filterSessions(filter: string){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
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

    toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        }
        else{
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }

        if(this.sortBy === 'votes'){
            this.visibleSessions.sort(this.sortByVotesDesc)
        }
    };

    userHasVoted(session: ISession){
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }
};