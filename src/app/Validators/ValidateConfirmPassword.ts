import { ChangePasswordService } from "../businessLogic/change-password.service";
import { SignUpService } from "../businessLogic/sign-up.service";
import { RecoverRequestDTO } from "../models/RecoverRequestDTO.model";
import { SignUpRequestDTO } from "../models/SignUpRequestDTO.model";

export class ValidateConfirmPassword {
  ValidateConfirmPassword(request: RecoverRequestDTO | SignUpRequestDTO, SignUpRequestIsValid: boolean, mainClass: ChangePasswordService | SignUpService) {
    if ((request.password.value === request.confirmPassword.value) && request.confirmPassword.value) {
      request.confirmPassword.isValid = true;
    }
    else {
      request.confirmPassword.isValid = false
      SignUpRequestIsValid = false;
      mainClass.messageService.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match!' });
    }
    return SignUpRequestIsValid;
  }
}
