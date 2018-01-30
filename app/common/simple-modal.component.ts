import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: './app/common/simple-modal.component.html',
    styleUrls: ['./app/common/simple-modal.component.css']
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;
    
    constructor(@Inject(JQ_TOKEN) private $: any) { }

    ngOnInit() { }

    closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase() === "false") return;
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}