import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServicesService {

  constructor() { }
  private http = inject(HttpClient);
//  make same uri slug into varribale
  apiURL:string = "https://projectapi.gerasim.in/api/Complaint";

  // use varribale in using template literal method
  getAllDepartmentData(){
    return this.http.get(`${this.apiURL}GetParentDepartment`);
  }
 // use varribale in using template Concatation method
  postAllDepartmentData(obj:any){
    return this.http.post(this.apiURL +"UpdateDepartment", obj);
  }

}
