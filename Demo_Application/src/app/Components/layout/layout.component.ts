import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);
  loggedUserData:any;
 constructor(){
  const loggedUser = localStorage.getItem('loginUser');
  if(loggedUser != null)
  {
    this.loggedUserData = JSON.parse(loggedUser);
  }
 }

  logOut(){
  localStorage.removeItem('loginUser');
  this.router.navigateByUrl('login')
  }
}
