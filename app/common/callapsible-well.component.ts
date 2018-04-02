import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './app/common/collapsible-well.component.html',
})

export class CollapsibleWellComponent implements OnInit {
    public visible: boolean;

    public ngOnInit() {
        this.visible = true;
    }

    public toggleContent() {
        this.visible = !this.visible;
    }
}
