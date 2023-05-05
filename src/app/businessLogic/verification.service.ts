import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { SignUpRequestDTO } from '../models/SignUpRequestDTO.model';
import { VerificationCodeRequest } from '../models/VerificationCodeRequest.model';
import { SmsApiService } from '../services/sms-api.service';
import { VerifyCodeRequest } from '../models/VerifyCodeRequest.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersApiService } from '../services/users-api.service';
import { SignUpRequest } from '../models/SignUpRequest.model';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(
    private storage: LocalStorageService,
    private userService: UsersApiService,
    private service: SmsApiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  SendVerificationCode() {
    var requestDTO = this.storage.getObject('signUpReq') as SignUpRequestDTO;
    if (requestDTO) {
      var request = new VerificationCodeRequest();
      request.source = requestDTO.phoneNumber.value;
      request.verificationType = requestDTO.selectedType ? 0 : 1;
      this.service.SendVerificationCode(request).subscribe(resp => { })
    }
    else {
      console.log('else');
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
    request.source = req.phoneNumber.value;
    request.userName = req.personalId.value;
    this.userService.SignUp(request).subscribe(resp => {
      if (resp.succeeded) {
        this.router.navigate(['./sign-in']);
        this.storage.removeObject('signUpReq');
      }
      else {
        console.log("dvsvd");
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    })
  }
}
