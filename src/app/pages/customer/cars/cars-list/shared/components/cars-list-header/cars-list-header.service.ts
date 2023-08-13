import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../../../../../services/local-storage.service';
import { CarsListHeaderComponent } from './cars-list-header.component';
import { BalancesApiService } from '../../../../../../../services/balances.api.service';
import { UserBalance } from '../../models/user-balance.model';
import { SalesHubService } from '../../services/sales-hub.service';
import { NotificationsApiService } from '../../../../../notifications-history/shared/services/notifications.api.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CarsListHeaderService {
  component: CarsListHeaderComponent;
  constructor(
    private storage: LocalStorageService,
    private balanceApi: BalancesApiService,
    private hubService: SalesHubService,
    private service: NotificationsApiService,
    private translate: TranslateService,
  ) {
    this.buildConection();
  }

  getMyBalance() {
    var result = this.storage.getObject('SignInResult');
    this.balanceApi.GetByUserId(result.userId).subscribe((resp: any) => {
      this.component.UserBalance = resp.data.actualBalance;
    });
  }
  buildConection() {
    this.hubService.buildConnection();
    this.openConnections();
  }
  openConnections() {
    this.hubService.emitters.NotificationReceived.subscribe((resp: any) => {
      this.getAllNotifications();
    });
  }
  getAllNotifications() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.id,
      lang: this.translate.currentLang,
    };
    this.service.GetAllForMe(req).subscribe((resp) => {
      console.log(resp.data);
      if (resp.succeeded) {
        var notReads = resp.data.filter((x: any) => x.isRead);
        if (notReads.length > 0) {
          this.component.notificationsReceived = true;
        } else {
          this.component.notificationsReceived = false;
        }
      }
    });
  }
}
