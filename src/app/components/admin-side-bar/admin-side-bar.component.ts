import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.scss']
})
export class AdminSideBarComponent {
  constructor(private router:Router) { };

  logout() {
    this.router.navigate(['./sign-in'])
  }
}
