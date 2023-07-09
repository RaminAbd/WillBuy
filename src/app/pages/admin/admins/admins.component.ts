import { Component } from '@angular/core';
import { AdminsService } from 'src/app/businessLogic/admins.service';
import { CustomerResponse } from 'src/app/models/CustomersResponse.model';
import { PagingRequest } from 'src/app/models/PagingRequest.model';
import { PagingResponse } from 'src/app/models/PagingResponse.model';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent {
  Admins: CustomerResponse[] = [];
  Response: PagingResponse = new PagingResponse();
  Request: PagingRequest = new PagingRequest();
  ServiceAgreementLevels: any[] = []
  loading: boolean = false;
  constructor(private service: AdminsService) {
    this.getAdmins(new PagingRequest());
    // this.service.getAdmins(this);

  };

  getAdmins(req: PagingRequest) {
    this.Request = req;
    this.service.getAdmins(this);
  }

}
