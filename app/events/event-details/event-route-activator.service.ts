import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const eventExists = !!this.eventService.getEventBy(+route.params['id']);

        if(!eventExists) this.router.navigate(['/404']);

        return eventExists;
    }
}