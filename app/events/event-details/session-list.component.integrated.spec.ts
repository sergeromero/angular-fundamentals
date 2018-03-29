import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionListComponent } from './session-list.component';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsibleWellComponent } from '../../common/callapsible-well.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugElement: DebugElement;

    //The async wrapper forces the Angular asynchronous functionality of component creation
    //to be synchronous.
    //This beforeEach method only deals with configuring the module needed for the tests.
    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Serge' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent, 
                UpvoteComponent, 
                DurationPipe, 
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        }).compileComponents(); //Only needed when webpack is not being used. Webpack does this compileComponents call for you.
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                { id: 3, name: 'Session 1', presenter: 'Serge', duration: 1, level: 'advanced', abstract: 'abstract', voters: ['Erika', 'Nicole'] }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges(); // The visibleSessions variable will be populated when this event is called.
            fixture.detectChanges(); // Activates the bindings on the HTML template.

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        });
    });
});