import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { NaPipe } from '../Custom Pipe/na.pipe';
import { DepartmentServicesService } from '../Services/department-services.service';
@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,LowerCasePipe,UpperCasePipe,TitleCasePipe,],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  demotext:string='Puneet';
  date:Date= new Date();
  CurrentTime:Observable<Date> = new Observable<Date>;
  student:any={
    name:'puneet',
    qualification:'bba',
    status:'active',
    
  }
  deptServices = inject(DepartmentServicesService);
  userRoleType:string='';
  userRoleType2:string='';
  test:any='';
constructor(){
  this.CurrentTime= interval(1000).pipe(map(()=> new Date()));
  
  // with subject
  this.deptServices.onRoleChange$.subscribe((result:string)=>{
    debugger;
   this.userRoleType = result;
  })
// with behviour subject
  this.deptServices.onRoleChange2$.subscribe((result:string)=>{
    debugger;
   this.userRoleType2 = result;
  })
}
}
