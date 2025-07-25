import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';

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
}