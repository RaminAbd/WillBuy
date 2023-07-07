import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseCrudApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  GetForm(serviceUrl: string) {
    return this.get(serviceUrl, null, null);
  }
  GetAll(serviceUrl: string, lang?: any) {
    return this.get(serviceUrl, null, lang);
  }
  Create(serviceUrl: string, form: any) {
    return this.post(serviceUrl+ 'Create', form)
  }
  Update(serviceUrl: string, form: any) {
    return this.post(serviceUrl + 'Update', form);
  }
  GetById(serviceUrl: string, id: string) {
    return this.get(serviceUrl+'Get/', id, null);
  }
  Delete(serviceUrl: string, id: string) {
    return this.delete(serviceUrl, id);
  }
  GetAllWithPaging(serviceUrl: string, req: any) {
    return this.get(serviceUrl+'GetAllWithPaging', null, req)
  }
}
