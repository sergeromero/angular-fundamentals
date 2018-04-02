import { ISession } from '../shared/event.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService;
    let mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        beforeEach(() => {
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 4', level: 'beginner' },
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
            ] as ISession[];
        });

        it('should filter the sessions correctly', () => {
             component.filterBy = 'intermediate';
             component.sortBy = 'name';
             component.eventId = 3;

             component.ngOnChanges();

             expect(component.visibleSessions.length).toBe(2);
             expect(component.visibleSessions[0].level).not.toBe('beginner');
             expect(component.visibleSessions[1].level).not.toBe('beginner');
        });

        it('should sort the sessions correctly', () => {
             component.filterBy = 'all';
             component.sortBy = 'name';
             component.eventId = 3;

             component.ngOnChanges();

             expect(component.visibleSessions.length).toBe(4);
             expect(component.visibleSessions[0].name).toBe('session 1');
             expect(component.visibleSessions[1].name).toBe('session 2');
             expect(component.visibleSessions[2].name).toBe('session 3');
             expect(component.visibleSessions[3].name).toBe('session 4');
        });
    });
});
