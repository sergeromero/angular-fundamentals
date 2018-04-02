import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response } from '@angular/http';
import { setTimeout } from 'core-js/library/web/timers';
import { Observable } from 'rxjs/Observable';
import { IEvent, ISession } from './event.model';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    public getEvents(): Observable<IEvent[]> {
      return this.http.get('http://localhost:8015/api/events').map((response: Response) => {
        return response.json() as IEvent[];
      }).catch(this.handleError);
    }

    public getEventBy(id: number): Observable<IEvent> {
      return this.http.get(`http://localhost:8015/api/events/${id}`).map((response: Response) => {
        return response.json() as IEvent;
      }).catch(this.handleError);
    }

    public saveEvent(event): Observable<IEvent> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers });

      return this.http.post('http://localhost:8015/api/events/new', JSON.stringify(event), options)
        .map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }

    public updateEvent(event): Observable<void> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers });

      return this.http.put('http://localhost:8015/api/updateevent', JSON.stringify(event), options).catch(this.handleError);
    }

    public searchSessions(searchTerm: string) {
      return this.http.get(`http://localhost:8015/api/sessions/search/?search=${searchTerm}`).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
    }

    public handleError(error: Response) {
      return Observable.throw(error.statusText);
    }
}
