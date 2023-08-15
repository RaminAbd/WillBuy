import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';
import { HttpClient } from '@angular/common/http';
import { CarDetailDTO } from '../pages/admin/pending-cars/shared/models/CarDetailDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CarApplicationsService extends BaseCrudApiService {
  serviceUrl: string = 'CarApplications/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) {
    super(http, handler);
  }
  Complete(form: CarDetailDTO) {
    return this.post(this.serviceUrl + 'Complete', form);
  }
  GetAllByUserId(req: any) {
    return this.get(this.serviceUrl + 'GetAllByUserId', null, req);
  }
}
