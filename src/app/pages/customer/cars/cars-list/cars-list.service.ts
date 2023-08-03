import { Injectable } from '@angular/core';
import { SalesHubService } from './shared/services/sales-hub.service';
import { PendingCarsComponent } from '../../../admin/pending-cars/pending-cars.component';
import { CarsListComponent } from './cars-list.component';

@Injectable({
  providedIn: 'root',
})
export class CarsListService {
  component: CarsListComponent;
  constructor(private hubService: SalesHubService) {}

  buildHubConnection() {
    this.hubService.buildConnection();
    this.openHubEmitters();
  }
  openHubEmitters() {
    this.hubService.emitters.SalesUpdated.subscribe((resp: any) => {
      this.component.SalesLocalCopy = resp;
      this.component.Sales = resp;
      this.component.updateNumberDisplay();
      console.log(resp, 'Sales');
    });
  }
  disconnectHub() {
    this.hubService.connection.stop();
    this.hubService.disableReconnection();
  }
}
