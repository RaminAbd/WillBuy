import { Injectable } from '@angular/core';
import { CarApplicationsService } from 'src/app/services/car-applications.service';
import { WorkOrderDetailComponent } from './work-order-detail.component';
import { TranslateService } from '@ngx-translate/core';
import { FilesApiService } from 'src/app/services/files.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RejectDialogComponent } from '../../components/reject-dialog/reject-dialog.component';
import { RejectReasonsService } from 'src/app/services/reject-reasons.service';
import { RejectReason } from 'src/app/models/RejectReason.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderDetailService {
  ref: DynamicDialogRef | undefined;
  component: WorkOrderDetailComponent;
  private RejectReasons: RejectReason[] = [];
  constructor(
    private service: CarApplicationsService,
    private translate: TranslateService,
    private blob: FilesApiService,
    public dialogService: DialogService,
    private reasonsService: RejectReasonsService,
    private router: Router,
  ) {
    this.getAllRejectReasons();
  }
  getAllRejectReasons() {
    this.reasonsService
      .getAllByLang(this.translate.currentLang)
      .subscribe((resp) => {
        if (resp.succeeded) {
          this.RejectReasons = resp.data;
        }
      });
  }
  getDetail(component: WorkOrderDetailComponent) {
    this.component = component;
    var req = {
      id: localStorage.getItem('carId') as string,
      lang: this.translate.currentLang,
    };
    this.service
      .GetByIdByLang(this.service.serviceUrl, req)
      .subscribe((resp) => {
        if (resp.succeeded) {
          this.component.carDetail = resp.data;
        }
      });
  }
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

  complete() {
    this.service.Complete(this.component.carDetail).subscribe((resp) => {
      if (resp.succeeded) {
        this.router.navigate(['admin/cars']);
      }
    });
  }

  reject() {
    this.ref = this.dialogService.open(RejectDialogComponent, {
      header: 'Reject Reason',
      width: '665px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: this.RejectReasons,
    });

    this.ref.onClose.subscribe((req: any) => {
      if (req) {
        this.component.carDetail.completionOption = 2;
        this.component.carDetail.rejectReason = req;
        this.component.carDetail.rejectReasonId = req.id;
        this.complete();
      }
    });
  }
}
