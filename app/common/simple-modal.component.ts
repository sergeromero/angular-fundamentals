import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    styleUrls: ['./app/common/simple-modal.component.css'],
    templateUrl: './app/common/simple-modal.component.html',
})

export class SimpleModalComponent implements OnInit {
    @Input() public title: string;
    @Input() public elementId: string;
    @Input() public closeOnBodyClick: string;
    @ViewChild('modalcontainer') public containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    public ngOnInit() { }

    public closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'false') { return; }
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}
