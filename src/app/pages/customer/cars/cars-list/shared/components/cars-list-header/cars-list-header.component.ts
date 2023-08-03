import { Component } from '@angular/core';
import { LocalStorageService } from '../../../../../../../services/local-storage.service';
import { CarsListHeaderService } from './cars-list-header.service';

@Component({
  selector: 'app-cars-list-header',
  templateUrl: './cars-list-header.component.html',
  styleUrls: ['./cars-list-header.component.scss'],
})
export class CarsListHeaderComponent {
  CustomerName: string = '';
  UserBalance: number = 0;
  constructor(
    private storage: LocalStorageService,
    private service: CarsListHeaderService,
  ) {
    this.service.component = this;
    this.getPersonalInfo();
    this.getMyBalance();
  }
  getPersonalInfo() {
    var permissionInfo = this.storage.getObject('selectedPermission');
    this.CustomerName =
      permissionInfo.firstName + ' ' + permissionInfo.lastName;
  }
  getMyBalance() {
    this.service.getMyBalance();
  }
}
