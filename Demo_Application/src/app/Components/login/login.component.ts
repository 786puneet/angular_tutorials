import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
 userObj:any={
  EmailId:'',
  password:''
 }
 router = inject(Router);
 http = inject(HttpClient);
 onLogin(){

  // api or dynamic login
this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.userObj).subscribe((res:any)=>{
 if(res.result)
 {
   alert("Login Successful");
   localStorage.setItem('loginUser', JSON.stringify(res.data));
    this.router.navigateByUrl('employess');
 }
 else
 {
  alert(res.message)
 }
})
  

  // static or hard code login
  // if (this.userObj.userName === 'admin' && this.userObj.password === '123456') {
  //   alert("Login Successful");
  //   localStorage.setItem('loginUser',this.userObj.userName);
  //   this.router.navigateByUrl('employess');
  // }
  // else
  // {
  //   alert("login failed");
  // }
 }
}
