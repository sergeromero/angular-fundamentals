import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventsListResolverService,
    CreateSessionComponent,
    SessionListComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav.component';

import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/callapsible-well.component';

import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventsListResolverService,
        AuthService
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
    //This is for demonstration purposes, in a real application this function
    //should be in its own file.

    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    
    return true;
}
