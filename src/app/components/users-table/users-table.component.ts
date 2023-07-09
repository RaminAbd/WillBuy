import { Component, Input } from '@angular/core';
import { AdminFilterTableService } from '../admin-filter-table/admin-filter-table.service';
import { AdminFilterTableComponent } from '../admin-filter-table/admin-filter-table.component';
import { UsersTableService } from './users-table.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent extends AdminFilterTableComponent {
  @Input() ServiceAgreementLevels: any[] = []
  @Input() ServiceAgreements: any[] = []
  customerCode: number;
  visible: boolean = false;
  CreateCustomerRequest: any;
  selectedServiceAgreement: any;
  selectedServiceAgreementLevel: any;
  constructor(private service: UsersTableService) { super(); };

  OpenUpsert(id?: string) {
    this.service.openUpsert(this, id);
  }

  sendRequest() {
    this.visible = false;
    this.service.createUser(this.CreateCustomerRequest);
  }

  Search() {
    console.log();
    this.PagingRequest.ServiceAgreementId = this.selectedServiceAgreement ? this.selectedServiceAgreement.id : '';
    this.PagingRequest.ServiceAgreementLevelId = this.selectedServiceAgreementLevel ? this.selectedServiceAgreementLevel.id : '';
    console.log(this.PagingRequest);
    this.getByPaging.emit(this.PagingRequest)
  }

  Clear() {
    this.selectedServiceAgreement = undefined;
    this.selectedServiceAgreementLevel = undefined;
    this.PagingRequest.PageIndex = 1;
    this.PagingRequest.SearchText = '';
    this.Search()
  }

  getValue(e: any, type: number) {
    if (type === 1) {
      this.selectedServiceAgreement = e;
    }
    else {
      this.selectedServiceAgreementLevel = e;
    }
    this.Search()
  }

}
