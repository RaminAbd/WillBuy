import { Injectable } from '@angular/core';
import {BaseCrudApiService} from "./base-crud-api.service";
import {HttpClient} from "@angular/common/http";
import {ServiceErrorHandler} from "../Errors/ServiceErrorHandler";

@Injectable({
  providedIn: 'root'
})
export class SaleHistoriesApiService extends BaseCrudApiService {
  serviceUrl: string = 'SaleHistories/';
  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }
  GetAllBySellerId(req:any){
    return this.get(this.serviceUrl+'GetAllBySellerId', null, req);
  }
  GetAllByBuyerId(req:any){
    return this.get(this.serviceUrl+'GetAllByBuyerId', null, req);
  }
}
