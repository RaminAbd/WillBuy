import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-car-sale-finish',
  templateUrl: './car-sale-finish.component.html',
  styleUrls: ['./car-sale-finish.component.scss'],
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
export class CarSaleFinishComponent {
  animate: boolean;
  constructor(private router: Router,
    public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.animate = params['animate'] === 'true';
    });
  };
  goToCarsList() {
    this.router.navigate(['customer', 'cars'])
  }
}
