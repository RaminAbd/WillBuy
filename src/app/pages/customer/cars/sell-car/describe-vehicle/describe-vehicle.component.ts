import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAddingForm } from 'src/app/models/CarAddingForm.model';
import { DescribeVehicleService } from './describe-vehicle.service';

@Component({
  selector: 'app-describe-vehicle',
  templateUrl: './describe-vehicle.component.html',
  styleUrls: ['./describe-vehicle.component.scss'],
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
    ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('0.3s ease')
      ]),
      transition(':leave', [
        animate('0.3s ease', style({
          transform: 'translateY(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class DescribeVehicleComponent {
  Form: CarAddingForm = new CarAddingForm()
  file: any;
  disableNext: boolean = true;
  includeCarFax: boolean = false;
  animate: boolean;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private service: DescribeVehicleService
  ) {
    this.service.getForm(this);
    this.route.queryParams.subscribe(params => {
      this.animate = params['animate'] === 'true';
    });
  };

  getFile(e: any) {
    this.service.getFile(e);
  }
  deleteSelectedFile() {
    this.Form.carFax = null;
    this.file = null;
    this.disableNext = true;
  }
  NextStep() {
    this.service.goToSaleType();
  }
  PreviousStep() {
    this.service.goToVehicleInvoice();
  }
  carFaxIncludeChanged() {
    if (this.includeCarFax) {
      this.Form.carFaxOption = 1
      this.disableNext = false;
    }
    else {
      this.Form.carFaxOption = 2;
      this.disableNext = true;
    }
    this.Form.carFax = null;
    this.file = null;

  }
}
