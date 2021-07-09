import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Bai5Component } from './bai5/bai5.component';
import { Bai6Component } from './bai6/bai6.component';
import { Bai7Component } from './bai7/bai7.component';
import { BaitapComponent } from './BaitapComponent/Baitap.component';

// pagination
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    
    declarations: [BaitapComponent,Bai5Component,Bai6Component,Bai7Component],
    imports: [FormsModule,BrowserModule,NgxPaginationModule],
    exports: [BaitapComponent],
})
export class BaitapModule { }
