import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateCustomerRequest } from 'src/app/models/CreateCustomerRequest.model';

@Component({
  selector: 'app-customer-upsert',
  templateUrl: './customer-upsert.component.html',
  styleUrls: ['./customer-upsert.component.scss']
})
export class CustomerUpsertComponent {
  constructor(public ref: DynamicDialogRef, public dialogService: DialogService, public config: DynamicDialogConfig,) {
    this.request = this.config.data;
  };
  request: CreateCustomerRequest = new CreateCustomerRequest()
  close() {
    this.ref.close();
  }
  create() {
    this.config.data = this.request;
    this.ref.close(this.config.data)
  }
}
