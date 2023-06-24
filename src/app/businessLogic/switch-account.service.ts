import { Injectable } from '@angular/core';
import { SwitchAccountComponent } from '../auth/switch-account/switch-account.component';
import { LocalStorageService } from '../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAccounts } from '../models/UserAccounts.model';

@Injectable({
  providedIn: 'root'
})
export class SwitchAccountService {

  constructor(
    private storage: LocalStorageService,
    private router: Router
  ) { }

  getAccounts(component: SwitchAccountComponent) {
    var userId = component.route.snapshot.paramMap.get('userId') as string;
    component.userAccounts = this.storage.getObject(userId)?.accounts;
    component.userAccounts.forEach(item => {
      item.permission = this.getPermissionTypeName(item.accountType);
    })
    console.log(component.userAccounts);
  }
  getPermissionTypeName(type: number): string {
    switch (type) {
      case 1:
        return 'Customer';
      case 2:
        return 'Operator';
      case 3:
        return 'Admin';
      default:
        return 'Customer';
    }
  }
  continueByRole(item: UserAccounts) {
    this.storage.saveObject('selectedPermission', item);
    switch (item.accountType) {
      case 1:
        this.router.navigate(['./home'])
        break;
      case 2:
        this.router.navigate(['./admin/customers'])
        break;
      case 3:
        this.router.navigate(['./admin/admins'])
        break;
      default:
        this.router.navigate(['./home'])
        break;
    }
  }
}
