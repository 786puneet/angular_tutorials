import { HttpClient } from '@angular/common/http';
import { Component, inject , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentServicesService } from '../../Services/department-services.service';
import { AlertComponent } from '../../Resuable Components/alert/alert.component';
import { MyButtonComponent } from '../../Resuable Components/alert/my-button/my-button.component';
import { Department } from '../../../Model/Class/customer';
@Component({
  selector: 'app-post-api',
  imports: [FormsModule,AlertComponent,MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',

})
export class PostApiComponent  implements OnInit{
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.getDepartmentData();
  }

  // this simple way to binding object with form
  // departmentObj:any=
  // {
  //   "departmentId": 0,
  //   "departmentName": " ",
  //   "departmentLogo": " ",
  // }
  departmentObj:Department = new Department();
  

  // onSave(){
  
  //   this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',this.departmentObj).subscribe((res:any)=>{
  //   if(res.result)
  //   {
  //    alert('Department is created.')
  //    this.getDepartmentData();
  //   }
  //   else
  //   {
  //     alert(res.message)
  //   }
  //   })
  
  // }

  // services method
 private depService = inject(DepartmentServicesService);
  onSave(){
    this.depService.postAllDepartmentData(this.departmentObj).subscribe((res:any)=>{
      if(res.result)
          {
           alert('Department is created.')
           this.getDepartmentData();
          }
          else
          {
            alert(res.message)
          }
    })
  }
  departmentRecords:any[]=[];
  getDepartmentData(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((responeData:any)=>{
     this.departmentRecords=responeData.data;
    })
  }
  
  editRecord(data:any)
  {
   this.departmentObj = data;
  }
  updateRecord(){
  
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',this.departmentObj).subscribe((res:any)=>{
      if(res.result)
      {
       alert('Department is Updated.')
       this.getDepartmentData();
      }
      else
      {
        alert(res.message)
      }
      })
  }

data(addData:any){
  debugger;
}  

  deleteRecord(id:number){
    this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +id).subscribe((res:any)=>{
      if(res.result)
      {
       alert('Department is Deleted.')
       this.getDepartmentData();
      }
      else
      {
        alert(res.message)
      }
      })
    }
  }