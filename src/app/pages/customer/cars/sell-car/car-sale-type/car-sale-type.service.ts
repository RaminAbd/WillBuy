import { Injectable } from '@angular/core';
import { CarSaleTypesApiService } from 'src/app/services/car-sale-types.api.service';
import { CarSaleTypeComponent } from './car-sale-type.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CarSaleTypeService {
  component: CarSaleTypeComponent;
  constructor(
    private service: CarSaleTypesApiService,
    private storage: LocalStorageService,
    private router: Router,
    private translate: TranslateService
  ) { }

  getSaleTypes() {
    this.service.get(this.service.serviceUrl + 'GetAll/', this.translate.currentLang, null).subscribe(resp => {
      console.log(resp);
      this.component.SaleTypes = resp.data;
      this.component.selectedSaleType = resp.data[0];
    })
  }
  getForm(component: CarSaleTypeComponent) {
    this.component = component;
    var vin = this.component.route.snapshot.paramMap.get('vin') as string;
    var form = this.storage.getObject(vin)
    if (form) {
      this.component.Form = form;
      console.log(form);
      if (this.component.Form.carFaxOption === 2 && !this.component.Form.carFax) {
        this.goToDescribeVehicle();
        return;
      }
    }
    else {
      this.goToLookUp();
      return;
    }
    this.getSaleTypes();
  }
  goToDescribeVehicle() {
    this.router.navigate(['customer', 'cars', 'sell', 'describe', this.component.Form.car.vin], {
      queryParams: { animate: true }
    });
  }
  goToLookUp() {
    this.router.navigate(['customer', 'cars', 'sell', 'lookup'], {
      queryParams: { animate: true }
    });
  }
  goToCheckOut(){
    this.storage.saveObject(this.component.Form.car.vin, this.component.Form);
    this.router.navigate(['customer', 'cars', 'sell', 'checkout', this.component.Form.car.vin], {
      queryParams: { animate: true }
    });
  }
}
