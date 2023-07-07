import { Component } from '@angular/core';
import { CarSaleTypeService } from './car-sale-type.service';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CarAddingForm } from 'src/app/models/CarAddingForm.model';
import { SaleType } from 'src/app/models/SaleType.model';
@Component({
  selector: 'app-car-sale-type',
  templateUrl: './car-sale-type.component.html',
  styleUrls: ['./car-sale-type.component.scss'],
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
export class CarSaleTypeComponent {
  animate: boolean;
  Form: CarAddingForm = new CarAddingForm();
  SaleTypes: SaleType[] = [];
  selectedSaleType: SaleType = new SaleType();
  constructor(
    public route: ActivatedRoute,
    private service: CarSaleTypeService) {
    this.service.getForm(this);
    this.route.queryParams.subscribe(params => {
      this.animate = params['animate'] === 'true';
    });
  };
  selectedTypeChanged(type: SaleType) {
    this.selectedSaleType = type;
    this.Form.saleOption = type.code;
    this.Form.directSaleOption.price = 0;
    this.Form.tradingSaleOption.desiredPrice = 0;
    this.Form.tradingSaleOption.minimalPrice = 0;
  }
  PreviousStep() {
    this.service.goToDescribeVehicle();
  }
  NextStep() {
    this.service.goToCheckOut();
  }
}
