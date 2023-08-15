import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FilesApiService } from '../../../../../../services/files.service';
import { WorkOrderDetailComponent } from '../work-order-detail/work-order-detail.component';
import { WorkOrderConfirmationComponent } from './work-order-confirmation.component';
import { SalesApiService } from '../../../../../customer/cars/cars-list/shared/services/sales.api.service';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RejectDialogComponent } from '../../components/reject-dialog/reject-dialog.component';
import { CarConfirmRejectDialogComponent } from '../../components/car-confirm-reject-dialog/car-confirm-reject-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderConfirmationService {
  component: WorkOrderConfirmationComponent;
  ref: DynamicDialogRef | undefined;
  constructor(
    private translate: TranslateService,
    private blob: FilesApiService,
    private service: SalesApiService,
    private router: Router,
    private dialog: DialogService,
  ) {}
  Download(myfile: any) {
    this.blob.Download(myfile.id).subscribe((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      var a = document.createElement('a');
      a.href = fileURL;
      a.target = '_blank';
      a.download = myfile.fileName;
      document.body.appendChild(a);
      a.click();
    });
  }
  getDetail() {
    var req = {
      id: localStorage.getItem('carId') as string,
      lang: this.translate.currentLang,
    };
    this.service
      .GetByIdByLang(this.service.serviceUrl, req)
      .subscribe((resp) => {
        console.log(resp);
        if (resp.succeeded) {
          this.component.carDetail = resp.data;
        }
      });
  }

  complete() {
    var req = {
      id: this.component.carDetail.id,
    };
    this.service.Complete(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.router.navigate(['admin/cars']);
      }
    });
  }
  Decline(req: any) {
    this.service.Decline(req).subscribe((resp) => {
      if (resp.succeeded) {
        this.router.navigate(['admin/cars']);
      }
    });
  }
  reject() {
    console.log(this.component.carDetail.activeOffer);
    var offersForReject = this.component.carDetail.offers.filter(
      (x: any) => x.id !== this.component.carDetail.activeOffer.id,
    );
    offersForReject.forEach((item) => {
      item.fullInfo =
        item.customer.firstName +
        ' ' +
        item.customer.lastName +
        ', ' +
        item.customer.personalId +
        ', $' +
        item.value;
    });
    this.component.carDetail.offersForReject = offersForReject;
    this.ref = this.dialog.open(CarConfirmRejectDialogComponent, {
      header: 'Reject Reason',
      width: '665px',
      height: '300px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: this.component.carDetail,
    });

    this.ref.onClose.subscribe((req: any) => {
      if (req) {
        this.Decline(req);
      }
    });
  }
}
