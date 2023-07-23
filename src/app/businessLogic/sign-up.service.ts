import { Injectable } from '@angular/core';
import { SignUpRequest } from '../models/SignUpRequest.model';
import { SignUpRequestDTO } from '../models/SignUpRequestDTO.model';
import { ToastService } from '../services/toast.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { VerificationCodeRequest } from '../models/VerificationCodeRequest.model';
import { VerificationService } from './verification.service';
import { ValidatePassword } from '../Validators/ValidatePassword';
import { ValidateConfirmPassword } from '../Validators/ValidateConfirmPassword';
import { ValidatePersonalID } from '../Validators/ValidatePersonalID';
import { UsersApiService } from '../services/users.api.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  // EMAIL_PATTERN: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  ENGLISH_NAME_PATTERN = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
  GEORGIAN_PHONE_PATTERN = /^(\+995\d{9}|5\d{8})$/;
  PASSWORD_PATTERN = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{5,}$/;
  constructor(
    public messageService: MessageService,
    private router: Router,
    private storage: LocalStorageService,
    private verificationService: VerificationService

  ) { }

  Submit(SignUpRequest: SignUpRequestDTO) {
    if (this.checkAllValidations(SignUpRequest)) {
      this.sendVerificationCode(SignUpRequest);
    }
  }

  sendVerificationCode(SignUpRequest: SignUpRequestDTO) {
    this.storage.saveObject('signUpReq', SignUpRequest);
    this.router.navigate(['./verification']);
  }

  checkAllValidations(SignUpRequest: SignUpRequestDTO) {
    var SignUpRequestIsValid: boolean = true;
    SignUpRequestIsValid = this.validatePersonalId(SignUpRequest, SignUpRequestIsValid);
    SignUpRequestIsValid = this.validatePhoneNumber(SignUpRequest, SignUpRequestIsValid);
    SignUpRequestIsValid = this.ValidateConfirmPassword(SignUpRequest, SignUpRequestIsValid);
    SignUpRequestIsValid = this.validateUserFirstName(SignUpRequest, SignUpRequestIsValid);
    SignUpRequestIsValid = this.validateUserLastName(SignUpRequest, SignUpRequestIsValid);
    SignUpRequestIsValid = this.ValidatePassword(SignUpRequest, SignUpRequestIsValid);
    return SignUpRequestIsValid;
  }

  validatePersonalId(SignUpRequest: SignUpRequestDTO, SignUpRequestIsValid: boolean) {
    var validatePassword = new ValidatePersonalID();
    return validatePassword.validatePersonalId(SignUpRequest.personalId, this, SignUpRequestIsValid);
  }

  validateUserFirstName(SignUpRequest: SignUpRequestDTO, SignUpRequestIsValid: boolean) {
    if (this.ENGLISH_NAME_PATTERN.test(SignUpRequest.firstName.value)) {
      SignUpRequest.firstName.isValid = true;
    }
    else {
      SignUpRequest.firstName.isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'First name is incorrect!' });
      SignUpRequestIsValid = false;
    }
    return SignUpRequestIsValid;
  }

  validateUserLastName(SignUpRequest: SignUpRequestDTO, SignUpRequestIsValid: boolean) {
    if (this.ENGLISH_NAME_PATTERN.test(SignUpRequest.lastName.value)) {
      SignUpRequest.lastName.isValid = true;
    }
    else {
      SignUpRequest.lastName.isValid = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Last name is incorrect!' });
      SignUpRequestIsValid = false;
    }
    return SignUpRequestIsValid;
  }

  validatePhoneNumber(SignUpRequest: SignUpRequestDTO, SignUpRequestIsValid: boolean) {
    if (this.GEORGIAN_PHONE_PATTERN.test(SignUpRequest.phoneNumber.value)) {
      SignUpRequest.phoneNumber.isValid = true;
    }
    else {
      SignUpRequest.phoneNumber.isValid = false;
      SignUpRequestIsValid = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Phone number is incorrect!' });
    }
    return SignUpRequestIsValid;
  }

  ValidatePassword(SignUpRequest: SignUpRequestDTO, SignUpRequestIsValid: boolean) {
    var validatePassword = new ValidatePassword();
    return validatePassword.ValidatePassword(SignUpRequest, this, SignUpRequestIsValid);
  }

  ValidateConfirmPassword(SignUpRequest: SignUpRequestDTO, SignUpRequestIsValid: boolean) {
    var validatePassword = new ValidateConfirmPassword();
    return validatePassword.ValidateConfirmPassword(SignUpRequest, SignUpRequestIsValid, this);
  }

}
