import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarLookupService } from './car-lookup.service';
import { CarAddingForm } from 'src/app/models/CarAddingForm.model';

@Component({
  selector: 'app-car-lookup',
  templateUrl: './car-lookup.component.html',
  styleUrls: ['./car-lookup.component.scss'],
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
export class CarLookupComponent {
  Form: CarAddingForm = new CarAddingForm()
  constructor(private router: Router, private service: CarLookupService) { };
  VinCode: string;

  searchByVin() {
    this.service.GetForm(this);
  }
  getCarById(vin: string) {

  }
  NextStep() {
    var next = this.Form.requiresCarDocument ? 'vehicle-invoice' : 'describe-vehicle';

    this.router.navigate(['customer', 'sell', next, this.VinCode], {
      queryParams: { animate: true }
    });
  }
}
