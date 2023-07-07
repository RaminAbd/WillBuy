import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarSaleTypesApiService extends BaseCrudApiService {
  serviceUrl:string = 'CarSaleTypes/'
  constructor(http: HttpClient) { super(http); }
}
