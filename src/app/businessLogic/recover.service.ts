import { Injectable } from '@angular/core';
import { SmsApiService } from '../services/sms-api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ValidateField } from 'src/app/models/ValidateField.model';
import { ValidatePersonalID } from '../Validators/ValidatePersonalID';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {
  constructor(
    public verificationService: SmsApiService,
    public messageService: MessageService,
    private router: Router
  ) { }

  Recover(personalId:ValidateField){
    if(this.checkAllValidations(personalId)){
      this.router.navigate(['./change-password', personalId.value])
    }
  }

  checkAllValidations(personalId:ValidateField){
    var SignInRequestIsValid: boolean = true;
    SignInRequestIsValid = this.validatePersonalId(personalId, SignInRequestIsValid);
    return SignInRequestIsValid;
  }

  validatePersonalId(personalId: ValidateField, SignInRequestIsValid: boolean) {
    var validateId = new ValidatePersonalID();
    return validateId.validatePersonalId(personalId, this, SignInRequestIsValid);
  }

}
