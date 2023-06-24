import { Injectable } from '@angular/core';
import { SmsApiService } from '../services/sms-api.service';
import { ChangePasswordComponent } from '../auth/change-password/change-password.component';
import { RecoverRequestDTO } from 'src/app/models/RecoverRequestDTO.model';
import { MessageService } from 'primeng/api';
import { ValidatePassword } from '../Validators/ValidatePassword';
import { ValidateConfirmPassword } from '../Validators/ValidateConfirmPassword';
import { RecoverRequest } from '../models/RecoverRequest.model';
import { UsersApiService } from '../services/users.api.service';
import { ForgotPasswordRequest } from '../models/ForgotPasswordRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  constructor(
    public verificationService: SmsApiService,
    public messageService: MessageService,
    private service: UsersApiService
  ) { }

  sendVerificationCodeByPersonalId(component: ChangePasswordComponent) {
    var personalID = component.route.snapshot.paramMap.get('personalId') as string;
    this.verificationService.SendVerifiocationCodeToUser(personalID).subscribe();
  }

  ChangePassword(component: ChangePasswordComponent) {
    if (this.checkAllValidations(component.RecoverRequestDTO, component)) {
      var request = new ForgotPasswordRequest();
      request.password = component.RecoverRequestDTO.password.value;
      request.code = component.UserCode;
      request.userName = component.route.snapshot.paramMap.get('personalId') as string;
      console.log(request);
      this.service.ForgotPassword(request).subscribe((resp:any) => {
        console.log(resp);
        if (resp.succeeded) {
          component.router.navigate(['./sign-in'])
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Someting went wrong!' });
        }
      })
    }
  }

  checkAllValidations(request: RecoverRequestDTO, component: ChangePasswordComponent) {
    var RecoverRequestIsValid: boolean = true;
    RecoverRequestIsValid = this.ValidateUserCode(component, RecoverRequestIsValid);
    RecoverRequestIsValid = this.ValidatePassword(request, RecoverRequestIsValid);
    RecoverRequestIsValid = this.ValidateConfirmPassword(request, RecoverRequestIsValid);
    console.log(RecoverRequestIsValid);
    return RecoverRequestIsValid;
  }

  ValidatePassword(request: RecoverRequestDTO, RecoverRequestIsValid: boolean) {
    var validatePassword = new ValidatePassword();
    return validatePassword.ValidatePassword(request, this, RecoverRequestIsValid);
  }

  ValidateConfirmPassword(RecoverRequest: RecoverRequestDTO, RecoverRequestIsValid: boolean) {
    var validatePassword = new ValidateConfirmPassword();
    return validatePassword.ValidateConfirmPassword(RecoverRequest, RecoverRequestIsValid, this);
  }

  ValidateUserCode(component: ChangePasswordComponent, RecoverRequestIsValid: boolean) {
    if (!component.input1 || !component.input2 || !component.input3 || !component.input4 || !component.input5) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Enter code!' });
      RecoverRequestIsValid = false;
    }
    else {
      RecoverRequestIsValid = true;
    }
    return RecoverRequestIsValid;
  }

}
