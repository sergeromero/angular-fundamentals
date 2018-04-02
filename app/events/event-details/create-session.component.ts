import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector: 'create-session',
    templateUrl: './app/events/event-details/create-session.component.html',
    styleUrls: ['./app/events/event-details/create-session.component.css'],
})

export class CreateSessionComponent implements OnInit {
    @Output() public saveNewSession = new EventEmitter();
    @Output() public cancelAddSession = new EventEmitter();
    public newSessionForm: FormGroup;
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;

    constructor() { }

    public ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
     }

     public saveSession(formValues) {
         const session: ISession = {
             id: undefined,
             name: formValues.name,
             presenter: formValues.presenter,
             duration: +formValues.duration,
             level: formValues.level,
             abstract: formValues.abstract,
             voters: [],
         };

         this.saveNewSession.emit(session);
     }

     public cancel() {
         this.cancelAddSession.emit();
     }
}
