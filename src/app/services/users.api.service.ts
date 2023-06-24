import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest.model';
import { ForgotPasswordRequest } from '../models/ForgotPasswordRequest.model';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends BaseApiService {
  serviceUrl: string = 'Users/'
  constructor(
    http: HttpClient
  ) { super(http); }

  ChangePassword(req: ChangePasswordRequest) {
    return this.post(this.serviceUrl + 'ChangePassword', req);
  }

  ForgotPassword(req: ForgotPasswordRequest) {
    return this.post(this.serviceUrl + 'ForgotPassword', req);
  }
}
