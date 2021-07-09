import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/_core/models/user';

@Component({
    selector: 'app-bai5',
    template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#"> Cybersoft </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-target="#modalLogin" data-toggle="modal" >
                        <div *ngIf="nguoiDung.isLogin == true">
                            {{nguoiDung.name}}
                        </div>
                        <div *ngIf="nguoiDung.isLogin == false">
                            login
                        </div>
                    </a>
                    <div class="modal fade" id="modalLogin">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">   
                                <h3>login</h3>
                                </div>
                                <div class="modal-body">
                                    <form #formDangNhap="ngForm" (ngSubmit)="dangNhap(formDangNhap.value)" >
                                        <div class="form-group">
                                            <label>tài khoản</label>
                                            <input class="form-control" type="text" ngModel name="taiKhoan" />                                
                                        </div>
                                        <div class="form-group">
                                            <label>mật khẩu</label>
                                            <input class="form-control" ngModel name="matKhau" />
                                        </div>
                                        <div class="form-group">
                                                <button type="submit" class="btn btn-primary">đăng nhập</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            
        </div>
    </nav>
    `,
})

export class Bai5Component implements OnInit {
    constructor() { }

    nguoiDung = new user();
    
    // username: cybersoft, password: cybersoft
    dangNhap=(valueDN:any)=>{
       console.log(valueDN);
       
       if(valueDN.taiKhoan === 'cybersoft' && valueDN.matKhau === 'cybersoft'){
           this.nguoiDung.name = valueDN.taiKhoan;

           localStorage.setItem('user', JSON.stringify(valueDN));
       }else{
           alert('nhập sai')
       }

       if(localStorage.getItem('user') != null){
            this.nguoiDung.isLogin = true;
        }
    }

    

    ngOnInit() { }
}