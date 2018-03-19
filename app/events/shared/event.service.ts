import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { setTimeout } from 'core-js/library/web/timers';
import { IEvent, ISession } from './event.model';
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    getEvents(): Observable<IEvent[]>{
      return this.http.get("http://localhost:8015/api/events").map((response: Response) => {
        return <IEvent[]>response.json();
      }).catch(this.handleError);
    };

    getEventBy(id: number): Observable<IEvent>{
      return this.http.get(`http://localhost:8015/api/events/${id}`).map((response: Response) => {
        return <IEvent>response.json();
      }).catch(this.handleError);
    };

    saveEvent(event): Observable<IEvent>{      
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8015/api/events/new', JSON.stringify(event), options)
        .map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    };

    updateEvent(event): Observable<void> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.put('http://localhost:8015/api/updateevent', JSON.stringify(event), options).catch(this.handleError);
    };

    searchSessions(searchTerm: string){
      return this.http.get(`http://localhost:8015/api/sessions/search/?search=${searchTerm}`).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
    };

    handleError(error: Response){
      return Observable.throw(error.statusText);
    };
}