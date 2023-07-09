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

  constructor( ) { }
}
