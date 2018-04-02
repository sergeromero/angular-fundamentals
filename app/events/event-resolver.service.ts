import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolverService implements Resolve<any> {
    constructor(private eventService: EventService) { }

    public resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEventBy(+route.params.id);
    }

}
