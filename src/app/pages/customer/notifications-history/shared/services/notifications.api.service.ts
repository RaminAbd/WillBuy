import { Injectable } from '@angular/core';
import { BaseCrudApiService } from '../../../../../services/base-crud-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../../../../../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class NotificationsApiService extends BaseCrudApiService {
  serviceUrl:string = 'Notifications/'
  constructor(http: HttpClient, handler: ServiceErrorHandler) {
    super(http, handler);
  }
  GetAllForMe(req:any){
    return this.get(this.serviceUrl+'GetAllForMe', null, req);
  }

}
