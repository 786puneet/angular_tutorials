import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServicesService {

  constructor() { }
  private http = inject(HttpClient);
//  make same uri slug into varribale
  // apiURL:string = "https://projectapi.gerasim.in/api/Complaint";

  // use varribale in using template literal method
  getAllDepartmentData(){
    return this.http.get(`${Constant.API_URL } ${Constant.DEPARTMENT_METHODS.GET_PARENT_DEPARTMENT}`);
  }
 // use varribale in using template Concatation method
  postAllDepartmentData(obj:any){
    return this.http.post( Constant.API_URL + Constant.DEPARTMENT_METHODS.UPDATE_DEPARTMENT , obj);
  }

}
