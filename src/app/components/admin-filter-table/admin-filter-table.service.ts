import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CustomerUpsertComponent } from '../customer-upsert/customer-upsert.component';
import { CreateCustomerRequest } from 'src/app/models/CreateCustomerRequest.model';
import { AdminFilterTableComponent } from './admin-filter-table.component';
import { AdministratorsApiService } from 'src/app/services/administrators.api.service';
import { PagingRequest } from 'src/app/models/PagingRequest.model';
import { OperatorsApiService } from 'src/app/services/operators.api.service';
import { CustomersApiService } from 'src/app/services/customers.api.service';
import { VerificationService } from 'src/app/businessLogic/verification.service';
import { SmsApiService } from 'src/app/services/sms-api.service';
import { VerificationCodeRequest } from 'src/app/models/VerificationCodeRequest.model';

@Injectable({
  providedIn: 'root'
})
export class AdminFilterTableService {
  ref: DynamicDialogRef | undefined;
  component: AdminFilterTableComponent;
  constructor(
    public dialogService: DialogService,
    private adminService: AdministratorsApiService,
    private operatorsService: OperatorsApiService,
    private customerService: CustomersApiService,
    private verificationService: SmsApiService
  ) { }

  upsertByType(req: any) {
    if (req.id) {
      this.updateByType(req);
    }
    else {
      this.createByType(req);
    }
  }
  createByType(req: any) {
    switch (this.component.tableType) {
      case 1:
        this.createAdmin(req);
        break;
      case 2:
        this.createOperator(req);
        break;
      case 3:
        this.sendCodeToCustomer(req);
        break;
    }
  }
  createUser(req: any) {
    req.communicationType = 1;
    req.code = this.component.customerCode;
    this.customerService.Create(this.customerService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
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
  createOperator(req: any) {
    console.log(req, "create");
    this.operatorsService.Create(this.operatorsService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
  }
  createAdmin(req: any) {
    this.adminService.Create(this.adminService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
  }

  updateByType(req: any) {
    switch (this.component.tableType) {
      case 1:
        this.updateAdmin(req);
        break;
      case 2:
        this.updateOperator(req);
        break;
      case 3:
        this.updateUser(req);
        break;
    }
  }

  updateUser(req: any) {
    this.customerService.Update(this.customerService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
  }

  updateAdmin(req: any) {
    this.adminService.Update(this.adminService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
  }
  updateOperator(req: any) {
    this.operatorsService.Update(this.operatorsService.serviceUrl, req).subscribe(resp => {
      this.component.getByPaging.emit(new PagingRequest());
    })
  }
  openUpsert(component: AdminFilterTableComponent, id?: string) {
    this.component = component
    if (!id) {
      this.openDialog(new CreateCustomerRequest());
    } else {
      this.getCustomerById(id);
    }
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
  getCustomerById(id: string) {
    switch (this.component.tableType) {
      case 1:
        this.getAdminById(id);
        break;
      case 2:
        this.getOperatorById(id);
        break;
      case 3:
        this.getUserById(id);
        break;

      default:
        break;
    }
  }
  getUserById(id: string) {
    this.customerService.GetById(this.customerService.serviceUrl, id).subscribe(resp => {
      this.openDialog(resp.data)
    })
  }
  getOperatorById(id: string) {
    this.operatorsService.GetById(this.operatorsService.serviceUrl, id).subscribe(resp => {
      this.openDialog(resp.data)
    })
  }
  getAdminById(id: string) {
    this.adminService.GetById(this.adminService.serviceUrl, id).subscribe(resp => {
      this.openDialog(resp.data)
    })
  }
}
