import { Component } from '@angular/core';
import { SoldCarsService } from './sold-cars.service';

@Component({
  selector: 'app-sold-cars',
  templateUrl: './sold-cars.component.html',
  styleUrls: ['./sold-cars.component.scss'],
})
export class SoldCarsComponent {
  SoldCars: any[] = [];
  PendingCars: any[] = [];
  constructor(private service: SoldCarsService) {
    this.service.component = this;
    this.service.GetAllBySellerId();
    this.service.getPendingCars();
  }
}
