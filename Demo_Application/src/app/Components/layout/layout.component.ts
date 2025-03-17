import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentServicesService } from '../Services/department-services.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);
  loggedUserData:any;
  selectedUserType:string='';
  deptServices = inject(DepartmentServicesService);
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

  onRoleChange(role:string)
  {
   debugger;
   this.deptServices.onRoleChange$.next(role);
   this.deptServices.onRoleChange2$.next(role);
  }
}
