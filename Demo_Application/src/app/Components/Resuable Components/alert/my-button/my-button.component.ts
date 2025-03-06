import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
@Input() btnClass:string="";
@Input() btnText:string="";

@Output() onBtnClick = new EventEmitter<any>();

onClick()
{
this.onBtnClick.emit('hi i am from child');
}
}
