import { Injectable } from '@angular/core';
import { CustomersComponent } from '../pages/admin/customers/customers.component';
import { CustomersApiService } from '../services/customers.api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  component: CustomersComponent;
  constructor(
    private cusService: CustomersApiService,
  ) { }


  getCustomers(component: CustomersComponent) {
    this.component = component;
    this.cusService.GetAllWithPaging(this.cusService.serviceUrl, this.component.Request).subscribe(resp => {
      console.log(resp);
      this.component.Customers = resp.data.items;
      this.component.loading =  false
      this.component.Response = resp.data
    })
  }
}
