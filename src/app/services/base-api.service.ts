import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceResponse } from '../models/ServiceResponse.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  protected BASE_URL = "https://willbuy-api.azurewebsites.net/api/";
  http: HttpClient;
  constructor(http: HttpClient, private handler: ServiceErrorHandler) {
    this.http = http;
  }

  get(url?: string, parameter?: any, paramsObj?: any) {
    let request: Observable<ServiceResponse>;
    if (parameter !== null) {
      request = this.http.get<ServiceResponse>(this.BASE_URL + url + parameter);
    } else {
      request = this.http.get<ServiceResponse>(this.BASE_URL + url, { params: paramsObj });
    }
    return this.handleRequest(request);
  }

  post(url?: string, object?: any) {
    const request = this.http.post<ServiceResponse>(this.BASE_URL + url, object);
    return this.handleRequest(request);
  }

  delete(url?: string, parameter?: any, paramsObj?: any) {
    let request: Observable<ServiceResponse>;

    if (parameter !== null) {
      request = this.http.delete<ServiceResponse>(this.BASE_URL + url + parameter);
    } else {
      request = this.http.delete<ServiceResponse>(this.BASE_URL + url, { params: paramsObj });
    }
    return this.handleRequest(request);
  }


  private handleRequest(request: Observable<ServiceResponse>): Observable<any> {
    return request.pipe(
      map((response: ServiceResponse) => {
        if (!response.succeeded) {
          return this.handler.handleError(response);
        }
        else{
          return response;
        }
      })
    );
  }
}
