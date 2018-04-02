import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionListComponent } from './session-list.component';
import { DurationPipe } from '../shared/duration.pipe';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';

//THE DIFFERENCE BETWEEN THIS AND THE DEEP INTEGRATED TESTS IS THAT BY ADDING THE NO_ERRORS_SCHEMA ELEMENT
//THE UpVoteComponent AND THE CollapsibleWellComponent ARE NOT NEEDED SO THEY CAN BE REMOVED FROM THE
//DECLARATIONS SECTION.
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
                DurationPipe,
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
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
            //A second way to call this same assert is by using the debug element like so:
            expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
});