import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { Fruit } from 'src/app/interfaces/fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  listFruits:Fruit[];
  name: string = "name";
  names: string[] = ["name", "price", "weight", "color"]
  firstLigne: any = {};

  constructor(private service:FruitsService) { }

  ngOnInit(): void {
    this.listFruits = this.service.getFruits();
    this.firstLigne = this.listFruits[0];
  }

  orderTable(title:string){
    this.listFruits.sort(this.getNewValue(title));
    this.firstLigne = this.listFruits[0];
  }

  getNewValue(title:string){
    var sortOrder = 1;
    
    return function (a,b) {
      if(title == "name" || title == "color"){
        var result = (a[title] < b[title]) ? -1 : (a[title] > b[title]) ? 1 : 0;
      }else{
        var result = (a[title] > b[title]) ? -1 : (a[title] < b[title]) ? 1 : 0;
      }
      return result * sortOrder;
    }
  }

}
