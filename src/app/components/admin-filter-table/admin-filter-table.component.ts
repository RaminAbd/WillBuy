import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerResponse } from 'src/app/models/CustomersResponse.model';
import { PagingResponse } from 'src/app/models/PagingResponse.model';
import { PagingRequest } from '../../models/PagingRequest.model';
import { AdminFilterTableService } from './admin-filter-table.service';

@Component({
  selector: 'app-admin-filter-table',
  templateUrl: './admin-filter-table.component.html',
  styleUrls: ['./admin-filter-table.component.scss']
})
export class AdminFilterTableComponent {
  visible: boolean = false;
  customerCode: number;
  constructor(
    private service: AdminFilterTableService
  ) { };
  CreateCustomerRequest: any;
  @Input() Customers: CustomerResponse[] = [];
  @Input() ServiceAgreementLevels: any[] = []
  @Input() loading: boolean = true;
  @Input() PagingResponse: PagingResponse = new PagingResponse();
  PagingRequest: PagingRequest = new PagingRequest();
  @Output() getByPaging: any = new EventEmitter();
  @Input() tableType: number;
  getSearchvalue(e: any) {
    console.log(e.target.value);
    this.PagingRequest.SearchText = e.target.value;
    this.getByPaging.emit(this.PagingRequest);
    this.PagingRequest.PageIndex = 1;
  }

  getEventValue($event: any): string {
    return $event.value;
  }
  clear(table: any) {
    table.clear();
  }
  customSort(e: any) {
    console.log(e);
    this.PagingRequest.SortField = e.field;
    this.PagingRequest.SortOrder = e.order;
    this.PagingRequest.PageIndex = 1;
    this.getByPaging.emit(this.PagingRequest);
  }

  onPageChange(event: any) {
    console.log(event);
    this.PagingRequest.PageIndex = event.page + 1;
    this.getByPaging.emit(this.PagingRequest)
  }

  OpenUpsert(id?: string) {
    this.service.openUpsert(this, id)
  }
  showDialog() {
    this.visible = true;
  }
  sendRequest() {
    this.visible = false;
    this.service.createUser(this.CreateCustomerRequest);
  }
}
