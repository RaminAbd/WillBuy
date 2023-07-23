import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgreementsApiService extends BaseCrudApiService {
  serviceUrl: string = 'ServiceAgreements/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }
}
