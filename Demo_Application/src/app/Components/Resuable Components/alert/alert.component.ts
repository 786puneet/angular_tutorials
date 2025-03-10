import { CommonModule } from '@angular/common';
import { Component, Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {
@Input() pageName:string = "";
@Input() alertType:string = "";
alertMode:string="this is demo txt";

ngOnChanges(changes: SimpleChanges): void {
  console.log('this is ngOnChanges..');
}
}
