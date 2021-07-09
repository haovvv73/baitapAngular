import { Component, OnInit ,Directive, HostBinding, HostListener } from '@angular/core';
import { Product } from 'src/app/_core/models/Product';

@Component({
    selector: 'app-bai6',
    template:`
    <div class="container mt-5">
            <div>
                <h1>bài 6</h1>
                <h3 >Thêm sản phẩm</h3>
                <div class="form-group">
                    <p>mã sản phẩm </p>
                    <input #id class="form-control" />
                </div>

                <div class="form-group">
                    <p>tên sản phẩm</p>
                    <input #name class="form-control"  />
                </div>

                <div class="form-group">
                    <p>giá</p>
                    <input #price  class="form-control"  />
                </div>

                <div class="form-group">
                    <button class="btn btn-success" (click)="themSanPham(id.value,name.value,price.value)">thêm</button>
                </div>
            </div>

            <h3>danh sách sản phẩm </h3>
            <table class="table">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>stt</th>
                        <th>mã SP</th>
                        <th>tên SP</th>
                        <th>giá SP</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr class="le" [ngClass]="{'chan': SP.color}" *ngFor="let SP of danhSach">
                        <td >{{SP.stt}}</td>
                        <td >{{SP.id}}</td>
                        <td>{{SP.name}}</td>
                        <td>{{SP.price}}</td>
                    </tr>

                </tbody>
            </table>
    </div>
    `,
    styles:[`
    
    .le{
        background-color:blue;
    }
    .chan{
        background-color:red;
    }

    `]
})

export class Bai6Component implements OnInit {
    constructor() { }
    
    sanPham: Product = new Product();

    danhSach:Product[] =[
        {id:'mm1',name:'tủ',price:10000,stt:1,color:true},
    ]

    isActive = true;

    themSanPham=(id:string,name:string,price:string)=>{ 
        this.isActive = !this.isActive;
        this.sanPham = {id:id,name:name,price:Number(price),stt: Number(this.danhSach.length + 1),color: this.isActive };
        this.danhSach.push(this.sanPham);
    }


    
    ngOnInit() { }
}

