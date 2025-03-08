import { CommonModule } from '@angular/common';
import { Component, TemplateRef, viewChild, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

  userName:string='puneet sood';
  isUserLogin:boolean=true;

  @ViewChild('dynamicText') dynamicText : TemplateRef<any> | undefined;
  @ViewChild('addDynamicText' , {read:ViewContainerRef}) addDynamicText : ViewContainerRef | undefined;

  loadTemplate()
  {
  if(this.dynamicText)
  {
  this.addDynamicText?.createEmbeddedView(this.dynamicText)
  }
}
}
