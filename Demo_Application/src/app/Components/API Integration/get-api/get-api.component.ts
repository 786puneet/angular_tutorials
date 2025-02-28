import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent {
  
   private http = inject(HttpClient); // ✅ Inject HttpClient using modern approach
  allUserData: any[] = [];
  // constructor(private http:HttpClient) {}  // ✅ Dependency Inject HttpClient using tradation approach
  getAllUser() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((result) => {
      this.allUserData = result;
    }, error=>{
      console.log(error.statusText());
    });
  }

}
