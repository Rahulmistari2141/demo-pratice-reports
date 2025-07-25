import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // userList : any[] = [];
  // using injection
  // https = inject(HttpClient);

private httpObj: any = {
  type:'',
  url:'',
  options:Object,
};

  constructor(private http: HttpClient,) { }

  getBaseurl(url: string) {
    switch (url) {
      case 'baseUrl': return 'https://projectapi.gerasim.in/api/RealEstate/'; break;
      default: return ''; break;
    }
  }

  // baseURL : string = 'https://projectapi.gerasim.in/api/RealEstate/';
  // definedation injection
  
  // getAlluser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userList = res;
  //   });
  // }

  getAllDept(){
    // return this.http.get(this.baseURL + "GetAllCustomers");
    // Template literals are literals delimited with backtick (`) characters,
    return this.http.get(`${this.getBaseurl('baseURL')}GetAllCustomers`);  
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
