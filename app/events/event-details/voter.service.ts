import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ISession } from '../shared/index';

@Injectable()
export class VoterService {
    private urlBase: string = 'http://localhost:8015';

    constructor(private http: Http) { }

    public deleteVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter((voter) => voter !== voterName);

        const url = `${this.urlBase}/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(url).catch(this.handleError).subscribe();
    }

    public addVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers});

        const url = `${this.urlBase}/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    public userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some((voter) => voter === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
      }
}
