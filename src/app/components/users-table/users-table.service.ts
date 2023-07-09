import { Injectable } from '@angular/core';
import { UsersTableComponent } from './users-table.component';
import { CreateCustomerRequest } from 'src/app/models/CreateCustomerRequest.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SmsApiService } from 'src/app/services/sms-api.service';
import { CustomerUpsertComponent } from '../customer-upsert/customer-upsert.component';
import { CustomersService } from 'src/app/businessLogic/customers.service';
import { CustomersApiService } from 'src/app/services/customers.api.service';
import { PagingRequest } from 'src/app/models/PagingRequest.model';
import { VerificationCodeRequest } from 'src/app/models/VerificationCodeRequest.model';

@Injectable({
  providedIn: 'root'
})
export class UsersTableService {
  ref: DynamicDialogRef | undefined;
  component: UsersTableComponent
  constructor(
    public dialogService: DialogService,
    private verificationService: SmsApiService,
    private customerService: CustomersApiService
  ) { }
  openUpsert(component: UsersTableComponent, id?: string) {
    this.component = component
    if (!id) {
      this.openDialog(new CreateCustomerRequest());
    } else {
      this.getUserById(id);
    }
  }

  getUserById(id: string) {
    this.customerService.GetById(this.customerService.serviceUrl, id).subscribe(resp => {
      this.openDialog(resp.data)
    })
  }

  openDialog(obj: CreateCustomerRequest) {
    this.ref = this.dialogService.open(CustomerUpsertComponent, {
      header: 'Create customer',
      width: '665px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: obj
    });

    this.ref.onClose.subscribe((req: any) => {
      if (req) {
        this.upsertByType(req);
      }
    });
  }

  upsertByType(req: any) {
    if (req.id) {
      this.updateUser(req);
    }
    else {
      this.createByType(req);
    }
  }

  updateUser(req: any) {
    this.customerService.Update(this.customerService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
  }

  createByType(req: any) {
    this.sendCodeToCustomer(req);
  }

  sendCodeToCustomer(req: any) {
    this.component.visible = true;
    var request = new VerificationCodeRequest();
    request.source = req.phoneNumber;
    request.verificationType = 1;
    this.component.CreateCustomerRequest = req;
    console.log(request);
    this.verificationService.SendVerificationCode(request).subscribe(resp => { })
  }

  createUser(req: any) {
    req.communicationType = 1;
    req.code = this.component.customerCode;
    this.customerService.Create(this.customerService.serviceUrl, req).subscribe(resp => {
      console.log(resp, "vsdvdsvdsd");
      this.component.getByPaging.emit(new PagingRequest());
    })
  }

}
