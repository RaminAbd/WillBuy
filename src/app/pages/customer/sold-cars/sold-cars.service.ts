import { Injectable } from '@angular/core';
import { SaleHistoriesApiService } from '../../../services/sale-histories.api.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { SoldCarsComponent } from './sold-cars.component';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})
export class SoldCarsService {
  component: SoldCarsComponent;
  constructor(
    private service: SaleHistoriesApiService,
    private storage: LocalStorageService,
    private translate:TranslateService
  ) {}

  GetAllBySellerId() {
    var res = this.storage.getObject('selectedPermission');
    console.log(res)
    var req = {
      id: res.id,
      lang:this.translate.currentLang
    };
    console.log(req)
    this.service.GetAllBySellerId(req).subscribe((resp) => {
      console.log(resp, 'dvsdvsdv')
      if(resp.succeeded){
        this.component.SoldCars = resp.data;
      }
    });
  }
}
