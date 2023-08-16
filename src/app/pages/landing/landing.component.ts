import { Component } from '@angular/core';
import { LandingService } from './landing.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(
    private service: LandingService,
    private router:Router
  ) {}
  goToSignIn(){
    this.router.navigate(['sign-in'])
  }
  goToAboutUs(){
    this.router.navigate(['customer/about-us'])
  }
}
