import { Component } from '@angular/core';
import {NotificationsResponse} from "./shared/models/notifications-response.model";
import {NotificationsHistoryService} from "./notifications-history.service";

@Component({
  selector: 'app-notifications-history',
  templateUrl: './notifications-history.component.html',
  styleUrls: ['./notifications-history.component.scss'],
})
export class NotificationsHistoryComponent {
  Notifications:NotificationsResponse[]=[];
  showDetail:boolean = false;
  detail:NotificationsResponse = new NotificationsResponse();
  showActions:boolean = false;
  constructor(
    private service:NotificationsHistoryService
  ) {
    this.service.component = this;
    this.service.getAllNotifications();
  }
  getDetail(item:NotificationsResponse){
    this.service.getDetail(item);
    this.showDetail = true;
  }

  rejectSale() {
    this.service.rejectSale()
  }

  acceptSale() {
    this.service.acceptSale()
  }
}
