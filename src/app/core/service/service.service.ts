import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userList = res;
  //   });
  // }
  setHttp(arg0: string, arg1: string, arg2: boolean, arg3: boolean, arg4: boolean, arg5: string) {
    throw new Error('Method not implemented.');
  }
  // getHttp() {
  //   throw new Error('Method not implemented.');
  // }
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
      // case 'baseUrl': return 'https://projectapi.gerasim.in/api/RealEstate/'; break;
      case 'baseUrl': return 'https://freeapi.miniprojectideas.com/'; break;
      case 'baseUrl': return 'https://api.freeprojectapi.com/'; break;
      default: return ''; break;
    }
  }

  getHttp(){
    !this.httpObj.options.body && (delete this.httpObj.options.body);
    !this.httpObj.options.params && (delete this.httpObj.options.params);
    return this.http.request(this.httpObj.type, this.httpObj.url, this.httpObj.options);
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
