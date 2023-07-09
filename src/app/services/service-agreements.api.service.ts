import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgreementsApiService extends BaseCrudApiService {
  serviceUrl: string = 'ServiceAgreements/';
  constructor(http: HttpClient) { super(http); }
}
