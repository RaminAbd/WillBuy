import { Injectable } from '@angular/core';
import { SoldCarsComponent } from "../sold-cars/sold-cars.component";
import { SaleHistoriesApiService } from "../../../services/sale-histories.api.service";
import { LocalStorageService } from "../../../services/local-storage.service";
import { PurchasedCarsComponent } from "./purchased-cars.component";

@Injectable({
  providedIn: 'root'
})
export class PurchasedCarsService {
  component: PurchasedCarsComponent;
  constructor(
    private service: SaleHistoriesApiService,
    private storage: LocalStorageService,
  ) { }

  GetAllByBuyerId() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.id,
    };
    this.service.GetAllByBuyerId(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.component.PurchasedCars = resp.data;
      }
    });
  }
}
