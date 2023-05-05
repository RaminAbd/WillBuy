import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '../models/SignUpRequest.model';
import { SignInRequest } from '../models/SignInRequest.model';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends BaseApiService {
  ServiceUrl: string = 'Users/'
  constructor(http: HttpClient) { super(http); }
  SignUp(SignUpRequest: SignUpRequest) {
    return this.post(this.ServiceUrl + 'SignUp', SignUpRequest);
  }
  Signin(SignInRequest: SignInRequest) {
    return this.post(this.ServiceUrl + 'Signin', SignInRequest);
  }
  GetUserInfo(userId: string) {
    return this.get(this.ServiceUrl + 'GetUserInfo/', userId);
  }
  UserExists(userName: string) {
    return this.get(this.ServiceUrl + 'UserExistsByUserName/', userName);
  }
}
