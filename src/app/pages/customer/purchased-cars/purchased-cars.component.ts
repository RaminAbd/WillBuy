import { Component } from '@angular/core';
import {PurchasedCarsService} from "./purchased-cars.service";

@Component({
  selector: 'app-purchased-cars',
  templateUrl: './purchased-cars.component.html',
  styleUrls: ['./purchased-cars.component.scss']
})
export class PurchasedCarsComponent {
  PurchasedCars:any[]=[]
  constructor(private service:PurchasedCarsService) {
    this.service.component = this;
    this.service.GetAllByBuyerId();
  }
}
