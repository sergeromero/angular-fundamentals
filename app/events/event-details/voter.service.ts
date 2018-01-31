import { Injectable } from '@angular/core';
import { ISession } from '../shared/index';

@Injectable()
export class VoterService {

    constructor() { }

    deleteVoter(session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);
    };

    addVoter(session: ISession, voterName: string): void {
        session.voters.push(voterName);
    };

    userHasVoted(session: ISession, voterName: string): boolean{
        return session.voters.some(voter => voter === voterName);
    };
};