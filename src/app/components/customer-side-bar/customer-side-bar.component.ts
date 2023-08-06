import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-side-bar',
  templateUrl: './customer-side-bar.component.html',
  styleUrls: ['./customer-side-bar.component.scss']
})
export class CustomerSideBarComponent {
  constructor(private router: Router) { };
  logout(){
    this.router.navigate(['./sign-in'])
  }
  sellCar(){
    this.router.navigate(['./customer/sell'])
  }
}
