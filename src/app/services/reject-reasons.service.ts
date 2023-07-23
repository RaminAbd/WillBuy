import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class RejectReasonsService extends BaseCrudApiService {
  serviceUrl: string = 'RejectReasons/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }
  getAllByLang(lang: string) {
    return this.get(this.serviceUrl + 'GetAll/', lang, null)
  }
}
