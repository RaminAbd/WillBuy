import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.scss'],
  animations: [
    trigger('pageAnimation', [
      state(
        'void',
        style({
          position: 'fixed',
          width: 'calc(100% - 421px)',
          'max-width': '100%',
        }),
      ),
      state(
        '*',
        style({
          position: 'fixed',
          width: 'calc(100% - 421px)',
          'max-width': '100%',
        }),
      ),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class SellCarComponent {
  constructor(private router: Router,private route: ActivatedRoute,) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getPageType(event.urlAfterRedirects)
      }
    })
  }

  getPageType(url?: string) {
    var currentUrl = url ? url : this.router.url;
    const parts = currentUrl.split('/');
    var PageType = parts[parts.length - 1]
  }
  getAnimationState(): string {
    return 'page';
  }
  Cancel() {
    this.router.navigate(['customer', 'cars']);
  }
}
