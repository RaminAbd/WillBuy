import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { VerificationCodeRequest } from '../models/VerificationCodeRequest.model';
import { VerifyCodeRequest } from '../models/VerifyCodeRequest.model';

@Injectable({
  providedIn: 'root'
})
export class SmsApiService extends BaseApiService {

  constructor(http: HttpClient) { super(http); }
  SendVerificationCode(req: VerificationCodeRequest) {
    return this.post('Verification/SendVerificationCode', req);
  }
  SendVerifiocationCodeToUser(personalId: string) {
    return this.get('Verification/SendVerifiocationCodeToUser/', personalId, null);
  }
}
