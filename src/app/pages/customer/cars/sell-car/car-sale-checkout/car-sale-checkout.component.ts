import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CarAddingForm } from 'src/app/models/CarAddingForm.model';
import { ActivatedRoute } from '@angular/router';
import { CarSaleCheckoutService } from './car-sale-checkout.service';
@Component({
  selector: 'app-car-sale-checkout',
  templateUrl: './car-sale-checkout.component.html',
  styleUrls: ['./car-sale-checkout.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class CarSaleCheckoutComponent {
  animate: boolean;
  Form: CarAddingForm = new CarAddingForm();
  constructor(
    public route: ActivatedRoute,
    private service: CarSaleCheckoutService) {
    this.service.getForm(this);
    this.route.queryParams.subscribe(params => {
      this.animate = params['animate'] === 'true';
    });
  };
  PreviousStep() {
    this.service.goToSaleType();
  }
  NextStep() {
    this.service.AddCar();
  }
}
