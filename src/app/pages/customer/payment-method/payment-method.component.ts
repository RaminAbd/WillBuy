import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent {
  constructor(private router: Router) {}
  goToCars() {
    this.router.navigate(['customer/cars/list']);
  }
}
