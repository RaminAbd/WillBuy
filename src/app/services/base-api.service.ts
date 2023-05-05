import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceResponse } from '../models/ServiceResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  protected BaseUrl = "https://willbuy-api.azurewebsites.net/api/";
  langObj: any;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  get(url?: string, parameter?: any, paramsObj?: any) {
    if (parameter !== null) {
      return this.http.get<ServiceResponse>(this.BaseUrl + url + parameter)
    }
    else {
      return this.http.get<ServiceResponse>(this.BaseUrl + url, { params: paramsObj })
    }
  }
  post(url?: string, object?: any) {
    return this.http.post<ServiceResponse>(this.BaseUrl + url, object);
  }
  delete(url?: string, parameter?: any) {
    return this.http.delete<ServiceResponse>(this.BaseUrl + url + parameter)
  }
}
