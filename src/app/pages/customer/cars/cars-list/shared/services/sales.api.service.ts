import { Injectable } from '@angular/core';
import { BaseCrudApiService } from '../../../../../../services/base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../../../../../../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class SalesApiService extends BaseCrudApiService {
  serviceUrl: string = 'Sales/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) {
    super(http, handler);
  }
  Buy(req: any) {
    return this.post(this.serviceUrl + 'Buy', req);
  }
  Trade(req: any) {
    return this.post(this.serviceUrl + 'Trade', req);
  }
  AcceptOffer(req: any) {
    return this.post(this.serviceUrl + 'AcceptOffer', req);
  }
  RejectOffer(req: any) {
    return this.post(this.serviceUrl + 'RejectOffer', req);
  }
  GetByExternalId(req: any) {
    return this.get(this.serviceUrl + 'GetByExternalId', null, req);
  }
  Complete(req: any) {
    return this.post(this.serviceUrl + 'Complete', req);
  }
  Decline(req: any) {
    return this.post(this.serviceUrl + 'Decline', req);
  }
}
