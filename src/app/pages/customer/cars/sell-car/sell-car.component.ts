import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.scss'],
  animations: [
    trigger('pageAnimation', [
      state('void', style({ position: 'fixed', width: 'calc(100% - 421px)', 'max-width': '100%' })),
      state('*', style({ position: 'fixed', width: 'calc(100% - 421px)', 'max-width': '100%' })),
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
export class SellCarComponent {
  constructor(private router: Router) { };

  getAnimationState(): string {
    return 'page';
  }
  Cancel() {
    this.router.navigate(['customer', 'cars'])
  }
}
