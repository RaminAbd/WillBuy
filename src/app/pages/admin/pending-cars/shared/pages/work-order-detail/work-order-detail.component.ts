import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOrderDetailService } from './work-order-detail.service';
import { CarDetailDTO } from '../../models/CarDetailDTO.model';

@Component({
  selector: 'app-work-order-detail',
  templateUrl: './work-order-detail.component.html',
  styleUrls: ['./work-order-detail.component.scss']
})
export class WorkOrderDetailComponent {
  carDetail: CarDetailDTO = new CarDetailDTO();
  displayBasic: boolean = false
  constructor(
    public route: ActivatedRoute,
    private service: WorkOrderDetailService,
    private router: Router
  ) {
    this.service.getDetail(this);
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
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
  goToCustomer(customer: any) {
  }
  Reject() {
    this.service.reject()
  }
  Accept() {
    this.carDetail.completionOption = 1;
    this.service.complete()
  }
}
