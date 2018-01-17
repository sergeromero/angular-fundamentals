import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './app/common/collapsible-well.component.html'
})

export class CollapsibleWellComponent implements OnInit {
    visible: boolean;
    
    constructor() { }

    ngOnInit() {
        this.visible = true;
    }

    toggleContent() {
        this.visible = !this.visible;
    }
}