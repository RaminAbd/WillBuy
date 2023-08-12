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
  getDetail() {
    var req = {
      Id: this.component.route.snapshot.paramMap.get('id') as string,
      lang: this.translate.currentLang,
    };
    this.service
      .GetByIdByLang(this.service.serviceUrl, req)
      .subscribe((resp) => {
        if (resp.succeeded) {
          console.log(resp.data)
          this.component.detail = resp.data;
          this.component.showActions = resp.data.type === 2;
          this.getCarDetail(resp.data.externalId);
        }
      });
  }

  getCarDetail(externalId: string) {
    var req = {
      Id: externalId,
      Lang: this.translate.currentLang,
    };
    this.salesService.GetByExternalId(req).subscribe((resp) => {
      console.log(resp)
      this.component.saleDetail = resp.data;
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
