import { Injectable } from '@angular/core';
import { CarSaleCheckoutComponent } from './car-sale-checkout.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { CarAddingApiService } from 'src/app/services/car-adding.service';

@Injectable({
  providedIn: 'root',
})
export class CarSaleCheckoutService {
  component: CarSaleCheckoutComponent;
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private apiService: CarAddingApiService,
  ) {}

  getForm(component: CarSaleCheckoutComponent) {
    this.component = component;
    var vin = this.component.route.snapshot.paramMap.get('vin') as string;
    var form = this.storage.getObject(vin);
    if (form) {
      this.component.Form = form;
      this.getCheckOut();
    } else {
      this.goToLookUp();
    }
  }
  getCheckOut() {
    this.apiService.GetCheckOut(this.component.Form).subscribe((resp) => {
      this.component.CheckOut = resp;
    });
  }
  AddCar() {
    console.log(this.component.Form, 'Add car form');
    this.apiService.AddCar(this.component.Form).subscribe((resp) => {
      this.goToFinish();
      this.storage.removeObject(this.component.Form.vin);
    });
  }

  goToFinish() {
    this.router.navigate(
      ['customer', 'cars', 'sell', 'finish', this.component.Form.car.vin],
      {
        queryParams: { animate: true },
      },
    );
  }

  goToLookUp() {
    this.router.navigate(['customer', 'cars', 'sell', 'lookup'], {
      queryParams: { animate: true },
    });
  }

  goToSaleType() {
    this.router.navigate(
      ['customer', 'cars', 'sell', 'sale-type', this.component.Form.car.vin],
      {
        queryParams: { animate: true },
      },
    );
  }
}
