import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class BalancesApiService extends BaseCrudApiService {
  serviceUrl: string = 'Balances/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) {
    super(http, handler);
  }
  GetByUserId(userId: string) {
    return this.get(this.serviceUrl + 'GetByUserId/', userId);
  }
}
