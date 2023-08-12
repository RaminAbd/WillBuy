import { Component } from '@angular/core';
import { CarDetailDTO } from '../../../../../../admin/pending-cars/shared/models/CarDetailDTO.model';
import { CarSalesDetailService } from './car-sales-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CarApplicationsService } from '../../../../../../../services/car-applications.service';

@Component({
  selector: 'app-car-sales-detail',
  templateUrl: './car-sales-detail.component.html',
  styleUrls: ['./car-sales-detail.component.scss'],
})
export class CarSalesDetailComponent {
  carDetail: CarDetailDTO = new CarDetailDTO();
  displayBasic: boolean = false;
  BidValue: number;
  bidActionDisabled: boolean = true;
  alreadyHasOffered: boolean = false;
  isMySale: boolean = false;
  selectedPermission: any;
  constructor(
    private service: CarSalesDetailService,
    public route: ActivatedRoute,
  ) {
    this.service.component = this;
    this.getDetail();
  }
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

  getDetail() {
    this.service.getDetail();
  }
  openDocument(file: any) {
    this.service.Download(file);
  }
  tradingBid() {
    this.service.tradingBid();
  }
  directBuy() {
    this.service.directBuy();
  }
  changeButtonState() {
    this.bidActionDisabled = false;
  }
}
