import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../Resuable Components/alert/alert.component';

@Component({
  selector: 'app-view-child',
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild('inputTxt') inputTxt?:ElementRef;
  @ViewChild(AlertComponent) alertComp?:AlertComponent;

 ngAfterViewInit(): void {
   const inputValue = this.inputTxt?.nativeElement.value;
   const alertMode = this.alertComp?.alertMode;
  
 }


}
