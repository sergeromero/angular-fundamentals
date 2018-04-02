import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ISession } from '../shared/event.model';
import { VoterService } from './voter.service';

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        let session;
        let anySessionId: number;

        beforeEach(() => {
            anySessionId = 10;
            session = { id: anySessionId, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable.of(false));
        });

        it('should remove the voter from the list of voters', () => {
            voterService.deleteVoter(3, session as ISession, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

        it('should call http.delete with the right URL', () => {
            voterService.deleteVoter(3, session as ISession, 'joe');

            const expectedUrl = `http://localhost:8015/api/events/3/sessions/${anySessionId}/voters/joe`;

            expect(mockHttp.delete).toHaveBeenCalledWith(expectedUrl);
        });
    });

    describe('addVoter', () => {
        let session;
        let anySessionId: number;

        beforeEach(() => {
            anySessionId = 10;
            session = { id: anySessionId, voters: ['joe', 'john'] };
            mockHttp.post.and.returnValue(Observable.of(false));
        });

        it('should call http.post with the right URL', () => {
            voterService.addVoter(3, session as ISession, 'joe');

            const expectedUrl = `http://localhost:8015/api/events/3/sessions/${anySessionId}/voters/joe`;

            expect(mockHttp.post).toHaveBeenCalledWith(expectedUrl, '{}', jasmine.any(RequestOptions));
        });
    });
});
