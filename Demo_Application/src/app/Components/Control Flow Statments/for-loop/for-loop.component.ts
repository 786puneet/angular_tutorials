import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-loop',
  imports: [FormsModule],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
cityNames:string[]=['Rajasthan','jaipur','Mohali','Delhi','Chandighar'];
allStudentData:any[]=[
  { id:101,name:'puneet' , qualification:'bba' , city:'mohali'},
  { id:102,name:'mukesh' , qualification:'bca' , city:'Jalandhar'},
  { id:103,name:'rajesh' , qualification:'mca' , city:'ludhiana'},
  { id:104,name:'karan' , qualification:'b.tech' , city:'maralakotla'},
  { id:105,name:'shiav' , qualification:'m.tech' , city:'sangrur'},
];
dayNumber:string = '';
}
