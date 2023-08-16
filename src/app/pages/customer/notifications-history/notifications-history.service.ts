import { Injectable } from '@angular/core';
import { NotificationsApiService } from './shared/services/notifications.api.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsHistoryComponent } from './notifications-history.component';
import { SalesHubService } from '../cars/cars-list/shared/services/sales-hub.service';
import { NotificationsResponse } from './shared/models/notifications-response.model';
import { SalesApiService } from '../cars/cars-list/shared/services/sales.api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NotificationsHistoryService {
  component: NotificationsHistoryComponent;
  constructor(
    private service: NotificationsApiService,
    private storage: LocalStorageService,
    private translate: TranslateService,
    private hubService: SalesHubService,
    private salesService: SalesApiService,
    private router: Router,
  ) {
    this.openConnections();
  }
  getAllNotifications() {
    var res = this.storage.getObject('selectedPermission');
    var req = {
      id: res.id,
      lang: this.translate.currentLang,
    };
    this.service.GetAllForMe(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.component.Notifications = resp.data;
      }
    });
  }
  openConnections() {
    this.hubService.emitters.NotificationReceived.subscribe((resp: any) => {
      if (resp.succeeded) {
        this.getAllNotifications();
      }
    });
  }

  getCarDetail(id: string) {
    var req = {
      Id: id,
      Lang: this.translate.currentLang,
    };
    this.salesService.GetByExternalId(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.getAllNotifications();
      }
    });
  }
}
