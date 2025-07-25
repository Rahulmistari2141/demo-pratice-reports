import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // userList : any[] = [];
  
  // using injection
  // https = inject(HttpClient);
  baseURL : string = 'https://projectapi.gerasim.in/api/RealEstate/';
  // definedation injection
  constructor( private http:HttpClient,){}
  
  // getAlluser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userList = res;
  //   });
  // }

  getAllDept(){
    // return this.http.get(this.baseURL + "GetAllCustomers");
    return this.http.get(`${this.baseURL}GetAllCustomers`);      // Template literals are literals delimited with backtick (`) characters,
  }

  // getAllcustomer(){
  //   // debugger;
  //   this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
  //     // debugger;
  //     this.customerList = res.data;
  //   },error=>{
  //     debugger;
  //   });
  // }ng
}
