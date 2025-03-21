import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class NgContainerComponent {

  isConatiner:boolean=false;
  http = inject(HttpClient);
  valueText:string='html';
 
  userData:any[] = [];
  isAPI:boolean=false;
  
  private cdRef = inject(ChangeDetectorRef);

  allUserData(){
   this.isAPI=true;
  
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userData = res;
      this.isAPI=false;
      this.valueText='java';
      setTimeout(() => {
        this.cdRef.detectChanges();
      }, 10000);
     
    })
  }
}
