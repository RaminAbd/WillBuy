import { Injectable } from '@angular/core';
import { CarAddingApiService } from 'src/app/services/car-adding.service';
import { CarLookupComponent } from './car-lookup.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CarLookupService {
  component: CarLookupComponent;
  constructor(
    private apiService: CarAddingApiService,
    private storage: LocalStorageService
  ) { }
  GetForm(component: CarLookupComponent) {
    this.component = component;
    var SignInResult = this.storage.getObject('SignInResult');
    var req: any = {
      UserId: SignInResult.userId,
      VIN: this.component.VinCode
    };
    this.apiService.get(this.apiService.ServiceUrl + 'GetForm', null, req).subscribe(resp => {
      console.log(resp.data);
      if (resp.succeeded) {
        this.component.Form = resp.data;
        this.component.Form.vin = req.VIN;
        this.component.Form.userId = req.UserId;
        this.storage.saveObject(req.VIN, resp.data);
      }
    })
  }
}
