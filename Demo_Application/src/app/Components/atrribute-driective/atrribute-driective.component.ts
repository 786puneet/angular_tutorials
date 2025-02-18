import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atrribute-driective',
  imports: [CommonModule , FormsModule],
  templateUrl: './atrribute-driective.component.html',
  styleUrl: './atrribute-driective.component.css'
})
export class AtrributeDriectiveComponent {
div1BgColor:string='bg-black';
isActive:boolean=false;
num1:string='';
num2:string='';
isChecked:boolean=true;
studentlist:any=[
  {name:'puneet',class:'bba',status:true, marks:26},
  {name:'Shivam',class:'bca',status:true, marks:57},
  {name:'Sunny',class:'llb',status:false, marks:44},
  {name:'Karan',class:'ca',status:true, marks:77}
]
Circle:any = {
'background-color':'red',
'width':'400px',
'height':'400px',
'border-radius':'50%'
}
blueBg(){
  this.div1BgColor='bg-primary';
}
redBg(){
  this.div1BgColor='bg-danger';
}

toggelbtn(){
  this.isActive=!this.isActive;
}
enableCheck(){
  this.isChecked=!this.isChecked;
}
}
