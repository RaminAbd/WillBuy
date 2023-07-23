import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class AdministratorsApiService extends BaseCrudApiService {
  serviceUrl: string = 'Administrators/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }
}
