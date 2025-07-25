import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-pratice';
  displayedColumns: string[] = ['position', 'name', 'weight', 'img', 'symbol'];
  dataSource = ELEMENT_DATA;
}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  img:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, img:'', symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, img:'', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, img:'', symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, img:'', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, img:'', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, img:'', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, img:'', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, img:'', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, img:'', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, img:'', symbol: 'Ne'},
];
