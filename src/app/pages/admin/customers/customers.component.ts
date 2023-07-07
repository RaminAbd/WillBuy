import { Component } from '@angular/core';
import { CustomersService } from 'src/app/businessLogic/customers.service';
import { OperatorsService } from 'src/app/businessLogic/operators.service';
import { CustomerResponse } from 'src/app/models/CustomersResponse.model';
import { PagingRequest } from 'src/app/models/PagingRequest.model';
import { PagingResponse } from 'src/app/models/PagingResponse.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  Customers: CustomerResponse[] = [];
  Response: PagingResponse = new PagingResponse();
  Request: PagingRequest = new PagingRequest();
  ServiceAgreementLevels: any[] = []
  loading: boolean = false;
  constructor(private service: CustomersService) {
    this.getCustomers(new PagingRequest());

  };

  getCustomers(req: PagingRequest) {
    this.Request = req;
    this.service.getCustomers(this);
  }
}
