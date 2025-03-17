import { Component , OnInit , DoCheck , AfterViewInit , AfterViewChecked, AfterContentInit ,AfterContentChecked , OnDestroy, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DepartmentServicesService } from '../Services/department-services.service';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, DoCheck ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy,OnChanges{
firstname:string;
userRoleType:string="";
userRoleType2:string="";
deptService = inject(DepartmentServicesService);
constructor()
{
console.log("hello this is constructor");
this.firstname='';
  
  // with subject
  this.deptService.onRoleChange$.subscribe((result:string)=>{
    debugger;
   this.userRoleType = result;
  })
// with behviour subject
  this.deptService.onRoleChange2$.subscribe((result:string)=>{
    debugger;
   this.userRoleType2 = result;
  })
}

ngOnInit(): void {
  console.log('this is ng on init');
}

ngDoCheck():void
{
console.log("this is ngDoCheck");
}

ngAfterViewInit(): void {
  console.log("afterviewinit");
}
ngAfterViewChecked(): void {
  console.log("AfterviewChecked");
}
ngAfterContentInit(): void {
  console.log("AfterContentInit");
}

ngAfterContentChecked(): void {
  console.log("aftercontentchecked");
}

ngOnDestroy(): void {
  console.log("on destroy");
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('onchanges init');
}
 
}
