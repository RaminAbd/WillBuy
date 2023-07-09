import { Component } from '@angular/core';
import { OperatorsService } from 'src/app/businessLogic/operators.service';
import { CustomerResponse } from 'src/app/models/CustomersResponse.model';
import { PagingRequest } from 'src/app/models/PagingRequest.model';
import { PagingResponse } from 'src/app/models/PagingResponse.model';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  Operators: CustomerResponse[] = [];
  Response: PagingResponse = new PagingResponse();
  Request: PagingRequest = new PagingRequest();
  loading: boolean = false;
  constructor(private service: OperatorsService) {
    this.getOperators(new PagingRequest());

  };

  getOperators(req: PagingRequest) {
    this.Request = req;
    this.service.getOperators(this);
  }
}
