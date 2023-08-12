import { Injectable } from '@angular/core';
import { OperatorsComponent } from '../pages/admin/operators/operators.component';
import { OperatorsApiService } from '../services/operators.api.service';
import { CustomersApiService } from '../services/customers.api.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  component: OperatorsComponent;
  constructor(
    private opService: OperatorsApiService,
    private customerService: CustomersApiService
  ) { }


  getOperators(component: OperatorsComponent) {
    this.component = component;
    this.opService.GetAllWithPaging(this.opService.serviceUrl, this.component.Request).subscribe(resp => {
      this.component.loading = false
      if (resp.succeeded) {
        this.component.Operators = resp.data.items;
        this.component.Response = resp.data
      }
    })
  }
}
