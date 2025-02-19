import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-driectives',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-driectives.component.html',
  styleUrl: './structural-driectives.component.css'
})
export class StructuralDriectivesComponent {
  isdiv1visiable:boolean=true;
  toggelShow:boolean=true;
  input1Value:string='';
  input2Value:string='';
  activeCheckbox:boolean=true;
  selectCountry:string='';
  allCity:string[]=['Mohali','Chandighar','Surat' , 'Panchakula'];
  studentList:any[]=[
    {id:1,name:'puneet',qualification:'bba', isActive:true},
    {id:2,name:'karan aujala',qualification:'m.comm',isActive:true},
    {id:3,name:'sidhu mossewala',qualification:'bca',isActive:false},
    {id:4,name:'amrinder gill',qualification:'diploma',isActive:true}
  ]
  isShow(){
    this.isdiv1visiable=true;
  }

  isHide(){
    this.isdiv1visiable=false;
  }

  toggelBtn()
  {
   this.toggelShow=!this.toggelShow;
  }
}
