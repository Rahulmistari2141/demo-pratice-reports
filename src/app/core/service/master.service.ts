import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  states = [
    { id: 1, name: 'Maharashtra'},
    { id: 2, name: 'Gujarat' },
    { id: 3, name: 'Madhyapradesh' },
    { id: 4, name: 'Andhra Pradesh.' },
  ]

  districts = [
    { id: 1, name: 'Jalgaon'},
    { id: 2, name: 'Dhule' },
    { id: 3, name: 'Nashik' },
    { id: 4, name: 'Pune' },
  ]

  // private districts = [
  //    "Jalgaon", "Dhule", "Nashik","Pune",
  // ]

  constructor(private apiService: ServiceService) {}

  getAllStates(){
    return this.states;
  }

  getAllDistricts(){
    return this.districts;
  }

  getAllState(){
    return new Observable((obj) => {
      this.apiService.setHttp('GET', 'MP/Master/GetAllState', false, false, false, 'baseUrl');
      this.apiService.getHttp().subscribe({
        next: (res: any) => {
          if (res.statusCode === '200') {
            obj.next(res.responseData);
          } else {
            obj.error(res.statusCode);
          }
        },
        error: (err: any) => {
          obj.error(err);
        }
      });
    })
  }

  getAllStateByID(id: number){
    return new Observable((obj) => {
      this.apiService.setHttp('GET', 'MP/Master/GetAllState?stateId=' + id, false, false, false, 'baseUrl');
      this.apiService.getHttp().subscribe({
        next: (res: any) => {
          if (res.statusCode === '200') {
            obj.next(res.responseData);
          } else {
            obj.error(res.statusCode);
          }
        },
        error: (err: any) => {
          obj.error(err);
        }
      });
    })
  }
}