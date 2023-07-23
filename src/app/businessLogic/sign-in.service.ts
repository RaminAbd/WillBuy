import { Injectable } from '@angular/core';
import { SignInRequest } from '../models/SignInRequest.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../services/local-storage.service';
import { SignInRequestDTO } from '../models/SignInRequestDTO.model';
import { ValidatePassword } from '../Validators/ValidatePassword';
import { ValidatePersonalID } from '../Validators/ValidatePersonalID';
import { TranslateService } from '@ngx-translate/core';
import { CustomersApiService } from '../services/customers.api.service';
import { LoginComponent } from '../auth/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  SignInRequest: SignInRequest = new SignInRequest();
  component: LoginComponent;
  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private translate: TranslateService,
    private service: CustomersApiService,
    public messageService: MessageService
  ) {

  }
  SignIn(req: SignInRequestDTO, component: LoginComponent) {
    this.component = component;
    if (this.checkAllValidations(req)) {
      this.SendSignInRequest(req);
    }
  }

  checkAllValidations(SignInRequest: SignInRequestDTO) {
    var SignInRequestIsValid: boolean = true;
    SignInRequestIsValid = this.validatePersonalId(SignInRequest, SignInRequestIsValid);
    SignInRequestIsValid = this.ValidatePassword(SignInRequest, SignInRequestIsValid);
    return SignInRequestIsValid;
  }

  ValidatePassword(SignInRequest: SignInRequestDTO, SignInRequestIsValid: boolean) {
    var validatePassword = new ValidatePassword();
    return validatePassword.ValidatePassword(SignInRequest, this, SignInRequestIsValid);
  }

  validatePersonalId(SignInRequest: SignInRequestDTO, SignInRequestIsValid: boolean) {
    var validatePassword = new ValidatePersonalID();
    return validatePassword.validatePersonalId(SignInRequest.personalId, this, SignInRequestIsValid);
  }

  SendSignInRequest(SignInRequest: SignInRequestDTO) {
    this.SignInRequest.userName = SignInRequest.personalId.value;
    this.SignInRequest.password = SignInRequest.password.value;

    this.service.SignIn(this.SignInRequest).subscribe(resp => {
      this.component.loading = false;
      this.storage.saveObject('SignInResult', resp)
      this.routeByRole(resp);
    })
  }
  routeByRole(data: any) {
    if (data.accounts.length === 1) {
      this.router.navigate(['./customer/cars']);
      this.storage.saveObject('selectedPermission', data.accounts[0]);
    }
    else {
      this.storage.saveObject(data.userId, data);
      this.router.navigate(['./switch-account', data.userId]);
    }
  }
}
