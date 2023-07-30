import { Injectable } from '@angular/core';
import { PendingCarsComponent } from './pending-cars.component';
import { WorkOrdersHubService } from './shared/services/work-orders-hub.service';

@Injectable({
  providedIn: 'root',
})
export class PendingCarsService {
  component: PendingCarsComponent;
  constructor(private hubService: WorkOrdersHubService) {}

  buildHubConnection(component: PendingCarsComponent) {
    this.component = component;
    this.hubService.buildConnection();
    this.openHubEmitters();
  }
  openHubEmitters() {
    this.hubService.emitters.WorkOrdersReceived.subscribe((resp: any) => {
      this.component.PendinCars = resp;
      console.log(resp, 'Work Orders');
    });
  }
  disconnectHub() {
    this.hubService.connection.stop();
    this.hubService.disableReconnection();
  }
}
