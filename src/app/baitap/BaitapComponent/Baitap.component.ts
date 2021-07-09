import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap',
    template:`
        <app-bai5></app-bai5>
        <app-bai6></app-bai6>
        <hr>
        <app-bai7></app-bai7>
        `
})

export class BaitapComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}