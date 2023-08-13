import { Component } from '@angular/core';
import { NotificationsResponse } from '../../models/notifications-response.model';
import { NotifDetailService } from './notif-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDTO } from '../../../../../admin/pending-cars/shared/models/CarDetailDTO.model';
import { SaleOfferModel } from '../../../../../admin/pending-cars/shared/models/sale-offer.model';

@Component({
  selector: 'app-notif-detail',
  templateUrl: './notif-detail.component.html',
  styleUrls: ['./notif-detail.component.scss'],
})
export class NotifDetailComponent {
  detail: NotificationsResponse = new NotificationsResponse();
  showActions: boolean = false;
  saleDetail: CarDetailDTO = new CarDetailDTO();
  currentOffer: SaleOfferModel = new SaleOfferModel();
  constructor(
    private service: NotifDetailService,
    public route: ActivatedRoute,
  ) {
    this.service.component = this;
    this.service.getCarDetail();
  }
  rejectSale() {
    this.service.rejectSale();
  }

  acceptSale() {
    this.service.acceptSale();
  }
}
