import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DepartmentServicesService } from '../../Services/department-services.service';
import { AlertComponent } from '../../Resuable Components/alert/alert.component';
import { MyButtonComponent } from '../../Resuable Components/alert/my-button/my-button.component';
import { Customer } from '../../../Model/Class/customer';
import { Iuser } from '../../../Model/Interface/Iuser';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css'],
  imports:[AlertComponent,MyButtonComponent]
})
export class GetApiComponent {
  
  //  private http = inject(HttpClient); // ✅ Inject HttpClient using modern approach
  allUserData: Iuser[] = [];
  userDataSet:Customer []=[];
  // constructor(private http:HttpClient) {}  // ✅ Dependency Inject HttpClient using tradation approach
  // getAllUser() {
  //   this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((result) => {
  //     this.allUserData = result;
  //   }, error=>{
  //     console.log(error.statusText());
  //   });
  // }

  // service method
  private depService = inject(DepartmentServicesService);

 getAllUser() {
  this.depService.getAllDepartmentData().subscribe((result: any) => {
      this.allUserData = result;
      this.userDataSet = result;
    },
    (error) => {
      console.log(error.statusText); 
    }
  );
}
alertMsg:string="";

changeMsg(){
  this.alertMsg="You are in api get page.."
}
}
