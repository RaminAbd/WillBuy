import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RejectReason } from '../../../../../../models/RejectReason.model';

@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.scss']
})
export class RejectDialogComponent {
  RejectReasons: RejectReason[] = []
  RejectReason: RejectReason = new RejectReason();
  constructor(public ref: DynamicDialogRef, public dialogService: DialogService, public config: DynamicDialogConfig,) {
    this.RejectReasons = config.data;
    this.RejectReason = this.RejectReasons[0];
  };

  cancel() {
    this.ref.close();
  }
  submit() {
    this.ref.close(this.RejectReason);
  }
}
