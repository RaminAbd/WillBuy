import { Injectable } from '@angular/core';
import { NotificationsApiService } from './shared/services/notifications.api.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsHistoryComponent } from './notifications-history.component';
import { SalesHubService } from '../cars/cars-list/shared/services/sales-hub.service';
import { NotificationsResponse } from './shared/models/notifications-response.model';
import {SalesApiService} from "../cars/cars-list/shared/services/sales.api.service";

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
    private salesService:SalesApiService
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
      this.component.Notifications = resp;
      console.log(resp);
    });
  }
  openConnections() {
    console.log('gelid');
    this.hubService.emitters.NotificationReceived.subscribe((resp: any) => {
      this.getAllNotifications();
    });
  }

  getDetail(item: NotificationsResponse) {
    var req = {
      Id: item.id,
      lang: this.translate.currentLang,
    };
    this.service
      .GetByIdByLang(this.service.serviceUrl, req)
      .subscribe((resp) => {
        this.component.detail = resp;
        this.component.showActions = resp.type === 2;
        console.log(resp)
      });
  }

  acceptSale() {
    var req = {
      id:this.component.detail.id
    }
    this.salesService.AcceptOffer(req).subscribe((resp=>{
      this.component.showDetail = false;
    }))
  }

  rejectSale() {
    var req = {
      id:this.component.detail.id
    }
    this.salesService.RejectOffer(req).subscribe((resp=>{
      this.component.showDetail = false;
    }))
  }
}
