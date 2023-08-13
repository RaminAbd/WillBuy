import { Component } from '@angular/core';
import { CarDetailDTO } from '../../models/CarDetailDTO.model';
import { WorkOrderConfirmationService } from './work-order-confirmation.service';
import { getDataDetail } from '@microsoft/signalr/dist/esm/Utils';
import { SaleOfferModel } from '../../models/sale-offer.model';

@Component({
  selector: 'app-work-order-confirmation',
  templateUrl: './work-order-confirmation.component.html',
  styleUrls: ['./work-order-confirmation.component.scss'],
})
export class WorkOrderConfirmationComponent {
  constructor(private service: WorkOrderConfirmationService) {
    this.service.component = this;
    this.service.getDetail();
  }
  currentOffer: SaleOfferModel = new SaleOfferModel();
  carDetail: CarDetailDTO = new CarDetailDTO();
  displayBasic: boolean = false;
  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  openDocument(file: any) {
    this.service.Download(file);
  }
  getPermissionTypeName(type: number): string {
    switch (type) {
      case 1:
        return 'Customer';
      case 2:
        return 'Operator';
      case 3:
        return 'Admin';
      default:
        return 'Customer';
    }
  }

  complete() {
    this.service.complete();
  }

  reject() {
    this.service.reject();
  }
}
