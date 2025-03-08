import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isConatiner:boolean=false;
  http = inject(HttpClient);

  userData:any[] = [];
  isAPI:boolean=false;
  allUserData(){
   this.isAPI=true;

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userData = res;
      this.isAPI=false;
    })
  }
}
