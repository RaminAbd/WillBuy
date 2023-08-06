import { Injectable } from '@angular/core';
import { SaleHistoriesApiService } from '../../../services/sale-histories.api.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { SoldCarsComponent } from './sold-cars.component';

@Injectable({
  providedIn: 'root',
})
export class SoldCarsService {
  component: SoldCarsComponent;
  constructor(
    private service: SaleHistoriesApiService,
    private storage: LocalStorageService,
  ) {}

  GetAllBySellerId() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.id,
    };
    this.service.GetAllBySellerId(req).subscribe((resp) => {
      this.component.SoldCars = resp;
    });
  }
}
