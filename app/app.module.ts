import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import './rxjs-extensions';

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventResolverService,
    EventService,
    EventsListComponent,
    EventsListResolverService,
    EventThumbnailComponent,
    SessionListComponent,
    UpvoteComponent,
    ValidateLocationDirective,
    VoterService,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav.component';

import {
    CollapsibleWellComponent,
    IToastr,
    JQ_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    TOASTR_TOKEN,
} from './common/index';

import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

declare let toastr: IToastr;
// tslint:disable-next-line:ban-types
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    // tslint:disable-next-line:object-literal-sort-keys
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
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        ValidateLocationDirective,
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventResolverService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventsListResolverService,
        AuthService,
        VoterService,
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    // This is for demonstration purposes, in a real application this function
    // should be in its own file.

    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }

    return true;
}
