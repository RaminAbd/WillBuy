import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { SignInRequest } from '../models/SignInRequest.model';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService extends BaseCrudApiService {
  serviceUrl: string = 'Customers/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }

  SignIn(req: SignInRequest) {
    return this.post('OAuth/SignIn', req);
  }
}
