import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class OperatorsApiService extends BaseCrudApiService {
  serviceUrl: string = 'Operators/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }
}
