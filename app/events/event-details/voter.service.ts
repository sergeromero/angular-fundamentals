import { Injectable } from '@angular/core';
import { ISession } from '../shared/index';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VoterService {
    private urlBase: string = 'http://localhost:8015';

    constructor(private http: Http) { }

    deleteVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);
        
        let url = `${this.urlBase}/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(url).catch(this.handleError).subscribe();
    };

    addVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let url = `${this.urlBase}/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    };

    userHasVoted(session: ISession, voterName: string): boolean{
        return session.voters.some(voter => voter === voterName);
    };

    private handleError(error: Response){
        return Observable.throw(error.statusText);
      };
};