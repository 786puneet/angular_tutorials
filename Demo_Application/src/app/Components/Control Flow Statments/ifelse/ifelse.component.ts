import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
 div1Show:boolean=false;
 isDivBlack:boolean=false;
 selectStatus:string='active';
 showDiv1(){
  this.div1Show=true;
 }

 hideDiv1(){
  this.div1Show=false;
 }
 value1:string='';
 value2:string='';


 toggelBtn(){
  this.isDivBlack =!this.isDivBlack;
 }
}
