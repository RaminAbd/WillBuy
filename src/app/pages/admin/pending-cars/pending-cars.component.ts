import { Component, OnDestroy } from '@angular/core';
import { PendingCarsService } from './pending-cars.service';
import { PendingCarsResponse } from './shared/models/PendingCarsResponse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-cars',
  templateUrl: './pending-cars.component.html',
  styleUrls: ['./pending-cars.component.scss'],
})
export class PendingCarsComponent implements OnDestroy {
  PendinCars: PendingCarsResponse[] = [];
  selectedCar: PendingCarsResponse = new PendingCarsResponse();
  constructor(
    private service: PendingCarsService,
    private router: Router,
  ) {
    this.service.buildHubConnection(this);
  }
  onRowSelect(e: any) {
    this.router.navigate(['admin/cars/', 'vehicle-details']);
    localStorage.setItem('carId', e.data.processId);
  }

  ngOnDestroy(): void {
    this.service.disconnectHub();
  }
}
