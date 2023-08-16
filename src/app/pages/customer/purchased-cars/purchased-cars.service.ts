import { Injectable } from '@angular/core';
import { SoldCarsComponent } from "../sold-cars/sold-cars.component";
import { SaleHistoriesApiService } from "../../../services/sale-histories.api.service";
import { LocalStorageService } from "../../../services/local-storage.service";
import { PurchasedCarsComponent } from "./purchased-cars.component";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class PurchasedCarsService {
  component: PurchasedCarsComponent;
  constructor(
    private service: SaleHistoriesApiService,
    private storage: LocalStorageService,
    private translate:TranslateService
  ) { }

  GetAllByBuyerId() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.id,
      lang:this.translate.currentLang
    };
    this.service.GetAllByBuyerId(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.component.PurchasedCars = resp.data;
      }
    });
  }
}
