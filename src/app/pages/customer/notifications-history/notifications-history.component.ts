import {Component, EventEmitter, Output} from '@angular/core';
import {NotificationsResponse} from "./shared/models/notifications-response.model";
import {NotificationsHistoryService} from "./notifications-history.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notifications-history',
  templateUrl: './notifications-history.component.html',
  styleUrls: ['./notifications-history.component.scss'],
})
export class NotificationsHistoryComponent {
  Notifications:NotificationsResponse[]=[];
  @Output() close:any = new EventEmitter()

  constructor(
    private service:NotificationsHistoryService,
    private router:Router
  ) {
    this.service.component = this;
    this.service.getAllNotifications();
  }
  getDetail(notif:any){
    this.router.navigate(['customer/cars/notification', notif.id])
  }
}
