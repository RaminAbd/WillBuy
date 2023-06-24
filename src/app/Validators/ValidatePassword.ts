import { ChangePasswordService } from "../businessLogic/change-password.service";
import { SignInService } from "../businessLogic/sign-in.service";
import { SignUpService } from "../businessLogic/sign-up.service";
import { RecoverRequestDTO } from "../models/RecoverRequestDTO.model";
import { SignInRequestDTO } from "../models/SignInRequestDTO.model";
import { SignUpRequest } from "../models/SignUpRequest.model";
import { SignUpRequestDTO } from '../models/SignUpRequestDTO.model';

export class ValidatePassword {
  // PASSWORD_PATTERN = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{5,}$/;
  PASSWORD_PATTERN = /^(?=.*\S).+$/;

  ValidatePassword(
    request: RecoverRequestDTO | SignUpRequestDTO | SignInRequestDTO,
    mainClass: ChangePasswordService | SignUpService | SignInService,
    SignUpRequestIsValid: boolean
  ) {
    if (this.PASSWORD_PATTERN.test(request.password.value)) {
      request.password.isValid = true;
    }
    else {
      request.password.isValid = false
      SignUpRequestIsValid = false;
      mainClass.messageService.add({ severity: 'error', summary: 'Error', detail: 'Password is incorrect' });
    }
    return SignUpRequestIsValid;
  }
}
