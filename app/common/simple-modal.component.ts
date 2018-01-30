import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: './app/common/simple-modal.component.html',
    styleUrls: ['./app/common/simple-modal.component.css']
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    
    constructor() { }

    ngOnInit() { }
}