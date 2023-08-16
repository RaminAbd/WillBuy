import { Injectable } from '@angular/core';
import { SaleHistoriesApiService } from '../../../services/sale-histories.api.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { SoldCarsComponent } from './sold-cars.component';
import { TranslateService } from '@ngx-translate/core';
import { CarApplicationsService } from '../../../services/car-applications.service';

@Injectable({
  providedIn: 'root',
})
export class SoldCarsService {
  component: SoldCarsComponent;
  constructor(
    private service: SaleHistoriesApiService,
    private storage: LocalStorageService,
    private translate: TranslateService,
    private applicationService: CarApplicationsService,
  ) {}

  GetAllBySellerId() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.id,
      lang: this.translate.currentLang,
    };
    this.service.GetAllBySellerId(req).subscribe((resp) => {
      if (resp.succeeded) {
        console.log(resp.data)
        this.component.SoldCars = resp.data;
      }
    });
  }

  getPendingCars() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.userId,
      lang: this.translate.currentLang,
    };
    this.applicationService.GetAllByUserId(req).subscribe((resp) => {
      this.component.PendingCars = resp.data;
    });
  }
}
