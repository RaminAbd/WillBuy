import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { CarAddingForm } from '../models/CarAddingForm.model';

@Injectable({
  providedIn: 'root'
})
export class CarAddingApiService extends BaseCrudApiService {
  ServiceUrl: string = 'CarAdding/';
  constructor(http: HttpClient) { super(http) }
  AddCar(req: CarAddingForm) {
    return this.post(this.ServiceUrl + 'AddCar', req);
  }
}
