import { Injectable } from '@angular/core';
import { AdminsComponent } from '../pages/admin/admins/admins.component';
import { AdministratorsApiService } from '../services/administrators.api.service';
import { CustomersApiService } from '../services/customers.api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  component: AdminsComponent;
  constructor(
    private adminService: AdministratorsApiService,
    private customerService: CustomersApiService
  ) { }


  getAdmins(component: AdminsComponent) {
    this.component = component;
    this.adminService.GetAllWithPaging(this.adminService.serviceUrl, this.component.Request).subscribe(resp => {
      console.log(resp);
      this.component.Admins = resp.data.items;
      this.component.loading =  false
      this.component.Response = resp.data
    })
  }
}
