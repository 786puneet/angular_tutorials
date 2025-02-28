import { HttpClient } from '@angular/common/http';
import { Component, inject , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent  implements OnInit{
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.getDepartmentData();
  }
  departmentObj:any=
  {
    "departmentId": 0,
    "departmentName": " ",
    "departmentLogo": " ",
  }

  

  onSave(){
  
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',this.departmentObj).subscribe((res:any)=>{
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
  
}
