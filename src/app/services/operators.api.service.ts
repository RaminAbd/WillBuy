import { Injectable } from '@angular/core';
import { BaseCrudApiService } from './base-crud-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperatorsApiService extends BaseCrudApiService {
  serviceUrl: string = 'Operators/';
  constructor(http: HttpClient) { super(http); }
}
