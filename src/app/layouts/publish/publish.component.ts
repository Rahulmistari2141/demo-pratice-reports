import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  hideHeaderFooter: boolean = false;


  clientId: string = '';
  siteId: string = '';
  buildingId: string = '';
  floorId: string = '';
  clients: any[] = [];
  sites: any[] = [];
  buildings: any[] = [];
  floors: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    // this.loadClients();
    // this.getSitesByClinetId();
    // this. getBuildingBySiteId();
  }

  // loadClients() {
  //   this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((result: any) => {
  //   this.clients = result.data;
  //   })
  // }

  // getSitesByClinetId(){
  //   this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllSites?clientid='+this.clientId).subscribe((result:any)=>{
  //     this.sites = result.data;
  //   }
  //   )
  // }

  //  getBuildingBySiteId(){
  //   this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllSites?clientid='+this.siteId).subscribe((result:any)=>{
  //     this.buildings = result.data;
  //   }
  //   )
  // }

}
