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
  @Input() PagingResponse: PagingResponse = new PagingResponse();
  @Input() loading: boolean = true;
  @Output() getByPaging: any = new EventEmitter();

  PagingRequest: PagingRequest = new PagingRequest();

  constructor() { };

  getSearchvalue(e: any) {
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

  onPageChange(event: any) {
    this.PagingRequest.PageIndex = event.page + 1;
    this.getByPaging.emit(this.PagingRequest)
  }

}
