import { Injectable } from '@angular/core';
import { SalesHubService } from './shared/services/sales-hub.service';
import { PendingCarsComponent } from '../../../admin/pending-cars/pending-cars.component';
import { CarsListComponent } from './cars-list.component';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class CarsListService {
  component: CarsListComponent;
  constructor(
    private hubService: SalesHubService,
    private router: Router
  ) { }

  openHubEmitters() {
    this.hubService.emitters.SalesUpdated.subscribe((resp: any) => {
      console.log(resp)
        this.component.SalesLocalCopy = resp;
        this.component.Sales = resp;
        this.component.updateNumberDisplay();
    });
  }
  getSalesDetail(item: any) {
    this.router.navigate(['customer', 'cars', 'detail', item.id])
  }
  getAllSales() {
    this.hubService.getAllSales();
  }
}
