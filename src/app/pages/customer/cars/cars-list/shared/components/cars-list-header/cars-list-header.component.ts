import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../../../../../../../services/local-storage.service';
import { CarsListHeaderService } from './cars-list-header.service';
import { SalesHubService } from '../../services/sales-hub.service';

@Component({
  selector: 'app-cars-list-header',
  templateUrl: './cars-list-header.component.html',
  styleUrls: ['./cars-list-header.component.scss'],
})
export class CarsListHeaderComponent {
  CustomerName: string = '';
  UserBalance: number = 0;
  @Input() PageHeader: string;
  notificationsReceived: boolean = false;
  showNotificationsHistory: boolean = false;
  constructor(
    private storage: LocalStorageService,
    private service: CarsListHeaderService,
    private hubService: SalesHubService,
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

  getAction() {
    this.showNotificationsHistory = false;
  }
}
