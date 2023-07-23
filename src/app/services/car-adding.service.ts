import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { CarAddingForm } from '../models/CarAddingForm.model';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class CarAddingApiService extends BaseCrudApiService {
  ServiceUrl: string = 'CarAdding/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler) }
  AddCar(req: CarAddingForm) {
    return this.post(this.ServiceUrl + 'AddCar', req);
  }
  GetCheckOut(form: CarAddingForm) {
    return this.post(this.ServiceUrl + 'GetCheckOut', form);
  }
}
