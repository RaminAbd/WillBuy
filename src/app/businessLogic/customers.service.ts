import { Injectable } from '@angular/core';
import { CustomersComponent } from '../pages/admin/customers/customers.component';
import { CustomersApiService } from '../services/customers.api.service';
import { ServiceAgreementsApiService } from '../services/service-agreements.api.service';
import { ServiceAgreementLevelsApiService } from '../services/service-agreement-levels.api.service';
import { TranslateService } from '@ngx-translate/core';
import { PagingRequest } from '../models/PagingRequest.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  component: CustomersComponent;
  constructor(
    private cusService: CustomersApiService,
    private serviceAgreement: ServiceAgreementsApiService,
    private serviceAgreementLevels: ServiceAgreementLevelsApiService,
    private translate: TranslateService
  ) { }
  getCustomers() {
    this.cusService.GetAllWithPaging(this.cusService.serviceUrl, this.component.Request).subscribe(resp => {
      this.component.loading = false
      this.component.Response = resp.data;
      this.component.Response.items = resp.data.items.map((item: any) => ({
        ...item,
        serviceAgreement:this.getServiceAgreementNameById(item.serviceAgreementId),
        serviceAgreementLevel:this.getServiceAgreementLevelNameById(item.serviceAgreementLevelId)
      }))
    })
  }
  getServiceAgreements(component: CustomersComponent) {
    this.component = component;
    this.serviceAgreement.get(this.serviceAgreement.serviceUrl + 'getAll/', this.translate.currentLang, null).subscribe(resp => {
      this.component.ServiceAgreements = resp.data;
      this.getServiceAgreementLevels();
    })
  }
  getServiceAgreementLevels() {
    this.serviceAgreementLevels.get(this.serviceAgreementLevels.serviceUrl + 'getAll/', this.translate.currentLang, null).subscribe(resp => {
      this.component.ServiceAgreementLevels = resp.data;
      this.component.getCustomers(new PagingRequest())
    })
  }
  getServiceAgreementNameById(id:string){
    var find = this.component.ServiceAgreements.find(s => s.id === id);
    return find.name;
  }
  getServiceAgreementLevelNameById(id:string){
    var find = this.component.ServiceAgreementLevels.find(s => s.id === id);
    return find.name;
  }
}
