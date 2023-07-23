import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { SignUpRequestDTO } from '../models/SignUpRequestDTO.model';
import { VerificationCodeRequest } from '../models/VerificationCodeRequest.model';
import { SmsApiService } from '../services/sms-api.service';
import { VerifyCodeRequest } from '../models/VerifyCodeRequest.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignUpRequest } from '../models/SignUpRequest.model';
import { UsersApiService } from '../services/users.api.service';
import { CustomersApiService } from '../services/customers.api.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(
    private storage: LocalStorageService,
    private service: SmsApiService,
    private customerService: CustomersApiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  SendVerificationCode() {
    var requestDTO = this.storage.getObject('signUpReq') as SignUpRequestDTO;
    if (requestDTO) {
      var request = new VerificationCodeRequest();
      request.source = requestDTO.phoneNumber.value;
      request.verificationType = requestDTO.selectedType ? 1 : 1;
      this.service.SendVerificationCode(request).subscribe(resp => { })
    }
    else {
      this.router.navigate(['./sign-in']);
    }
  }


  getHiddenPhoneNumber() {
    var requestDTO = this.storage.getObject('signUpReq') as SignUpRequestDTO;
    var SecretPhoneNumber = ''
    if (requestDTO.phoneNumber.value.includes('+995')) {
      SecretPhoneNumber = '+995' + requestDTO.phoneNumber.value.substring(0, 3) + "****" + requestDTO.phoneNumber.value.substring(7, 9);
    }
    else {
      SecretPhoneNumber = requestDTO.phoneNumber.value.substring(0, 3) + "****" + requestDTO.phoneNumber.value.substring(7, 9);
    }
    return SecretPhoneNumber;
  }

  VerifyCode(code: string) {
    var requestDTO = this.storage.getObject('signUpReq') as SignUpRequestDTO;
    var obj = new VerifyCodeRequest();
    obj.phoneNumber = requestDTO.phoneNumber.value;
    obj.code = code;
    this.registerUser(requestDTO, obj.code);
  }

  registerUser(req: SignUpRequestDTO, code: any) {
    var request: SignUpRequest = new SignUpRequest();
    request.code = code;
    request.firstName = req.firstName.value;
    request.lastName = req.lastName.value;
    request.password = req.password.value;
    request.phoneNumber = req.phoneNumber.value;
    request.personalId = req.personalId.value;
    this.customerService.Create(this.customerService.serviceUrl, request).subscribe(resp => {
      this.router.navigate(['./sign-in']);
      this.storage.removeObject('signUpReq');
    })
  }
}
