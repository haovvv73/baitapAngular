import { Component, OnInit } from '@angular/core';
import { DienThoai } from 'src/app/_core/models/dienThoai';

@Component({
    selector: 'app-bai7',
    template:`
    <div class="container mt-5">
        <h1>bài 7</h1>
        <div class="border border-1" style="height: 130px;">
            <h3 class="bg-dark text-white p-2">quản lý danh mục sản phẩm</h3>
            <div class="row container mt-4">
                <div class="col-3">
                    <input type="text" #ma class="form-control" placeholder="Mã SP" >
                </div>
                <div class="col-3">
                    <input type="text"  #ten class="form-control" placeholder="Tên SP" >
                </div>
                <div class="col-3">
                    <input type="text"  #gia class="form-control" placeholder="Gía" >
                </div>
                <div class="col-3">
                    <button class="btn btn-success" (click)="addSP(ma.value,ten.value,gia.value)" >thêm sản phẩm</button>
                </div>
            </div>    
        </div>
        
        <div class="mt-5">
           <h3 class="bg-dark text-white p-2">Danh Mục Sản Phẩm</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>mã SP</th>
                        <th>tên SP</th>
                        <th>giá SP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let sp of dssp | paginate: { itemsPerPage: 7, currentPage: p }" >
                        <th>{{sp.MaSP}}</th>
                        <th>{{sp.TenSP}}</th>
                        <th>{{sp.Gia}}</th>
                        <th> 
                            <button class="btn btn-danger" (click)="xoaSP(sp.MaSP)" >delete</button>
                        </th>
                    </tr>
                </tbody>
            </table> 
        </div>
        <pagination-controls (pageChange)="p = $event"></pagination-controls>

    </div>
    `
})

export class Bai7Component implements OnInit {
    constructor() { }

    p: number = 1;

    dssp:any[] = [
        {MaSP:1,TenSP:"Sony XZ",Gia:1000},
        {MaSP:2,TenSP:"Sony XZ2",Gia:1000},
        {MaSP:3,TenSP:"HTC U Ultra",Gia:1000},
        {MaSP:4,TenSP:"HTC U12 Plus",Gia:1000},
        {MaSP:5,TenSP:"Iphone XS MAX",Gia:1000},
        {MaSP:6,TenSP:"Iphone XR",Gia:1000},
        {MaSP:7,TenSP:"Xiaomi Mi Note 3",Gia:9900},
        {MaSP:8,TenSP:"Xiaomi Mi 8",Gia:1000},
        {MaSP:9,TenSP:"Galaxy Note 9",Gia:1000},
        {MaSP:10,TenSP:"Galaxy S9 Plus",Gia:1000},
        {MaSP:11,TenSP:"Nokia X9",Gia:1000},
        ]; 

    phone:DienThoai = new DienThoai();

    addSP=(ma:string,ten:string,gia:string)=>{
        this.phone ={MaSP:ma,TenSP:ten,Gia: Number(gia)};
        this.dssp.push(this.phone);
    }

    xoaSP=(ma:string)=>{
        this.dssp = this.dssp.filter(DT => DT.MaSP !== ma);
    }


    ngOnInit() { }
}