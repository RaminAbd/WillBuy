import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { VehicleInvoiceService } from './vehicle-invoice.service';
import { ActivatedRoute } from '@angular/router';
import { CarAddingForm } from 'src/app/models/CarAddingForm.model';
@Component({
  selector: 'app-vehicle-invoice',
  templateUrl: './vehicle-invoice.component.html',
  styleUrls: ['./vehicle-invoice.component.scss'],
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
export class VehicleInvoiceComponent {
  Form: CarAddingForm = new CarAddingForm()
  file: any;
  constructor(
    private service: VehicleInvoiceService,
    public route: ActivatedRoute,
  ) {
    this.service.getForm(this);
    this.route.queryParams.subscribe(params => {
      this.animate = params['animate'] === 'true';
    });
  };

  animate: boolean;
  disableNext: boolean = true;
  NextStep() {
    this.service.goToDescribeVehicle()
  }
  PreviousStep() {
    this.service.goToLookUp();
  }

  getFile(e: any) {
    this.service.getFile(e);
  }
  deleteSelectedFile() {
    this.file = null
    this.Form.carDocument = null
  }
}
