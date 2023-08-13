import { Injectable } from '@angular/core';
import { NotifDetailComponent } from './notif-detail.component';
import { NotificationsResponse } from '../../models/notifications-response.model';
import { NotificationsApiService } from '../../services/notifications.api.service';
import { TranslateService } from '@ngx-translate/core';
import { SalesApiService } from '../../../../cars/cars-list/shared/services/sales.api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NotifDetailService {
  component: NotifDetailComponent;
  constructor(
    private service: NotificationsApiService,
    private translate: TranslateService,
    private salesService: SalesApiService,
    private router: Router,
  ) {}

  getCarDetail() {
    var req = {
      Id: this.component.route.snapshot.paramMap.get('id') as string,
      Lang: this.translate.currentLang,
    };
    this.salesService.GetByExternalId(req).subscribe((resp) => {
      console.log(resp);
      if (resp.succeeded) {
        this.component.saleDetail = resp.data.sale;
        this.component.detail = resp.data.notification;
        this.component.currentOffer = this.component.saleDetail.offers.find(
          (x: any) => x.id === this.component.detail.externalId,
        );

        console.log(this.component.currentOffer);
      }
    });
  }

  acceptSale() {
    var req = {
      id: this.component.detail.externalId,
    };
    this.salesService.AcceptOffer(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.router.navigate(['customer/cars/list']);
      }
    });
  }

  rejectSale() {
    var req = {
      id: this.component.detail.externalId,
    };
    this.salesService.RejectOffer(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.router.navigate(['customer/cars/list']);
      }
    });
  }
}
