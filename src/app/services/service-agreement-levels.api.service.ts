import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgreementLevelsApiService extends BaseCrudApiService {
  serviceUrl: string = 'ServiceAgreementLevels/';
  constructor(http: HttpClient) { super(http); }
}
