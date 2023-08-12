import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.scss'],
})
export class AdminSideBarComponent {
  isAdmin: boolean = false;
  isOperator: boolean = false;
  constructor(
    private router: Router,
    private storage: LocalStorageService,
  ) {
    this.getUserPermissions();
  }

  logout() {
    this.router.navigate(['./sign-in']);
  }

  private getUserPermissions() {
    var per = this.storage.getObject('selectedPermission');
    console.log(per)
    if(per.accountType === 3) {
      this.isAdmin = true
      this.isOperator = false
    }
    else{
      this.isAdmin = false
      this.isOperator = true
    }
  }
}
