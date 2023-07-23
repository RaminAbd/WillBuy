import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class BaseCrudApiService extends BaseApiService {

  constructor(http: HttpClient, handler: ServiceErrorHandler) {
    super(http, handler);
  }

  GetForm(serviceUrl: string) {
    return this.get(serviceUrl, null, null);
  }
  GetAll(serviceUrl: string, lang?: any) {
    return this.get(serviceUrl, null, lang);
  }
  Create(serviceUrl: string, form: any) {
    return this.post(serviceUrl + 'Create', form)
  }
  Update(serviceUrl: string, form: any) {
    return this.post(serviceUrl + 'Update', form);
  }
  GetById(serviceUrl: string, id: string) {
    return this.get(serviceUrl + 'Get/', id, null);
  }
  Delete(serviceUrl: string, id: string) {
    return this.delete(serviceUrl, id);
  }
  GetAllWithPaging(serviceUrl: string, req: any) {
    return this.get(serviceUrl + 'GetAllWithPaging', null, req)
  }
  GetByIdByLang(serviceUrl: string, req: any) {
    return this.get(serviceUrl + 'Get', null, req)
  }
}
