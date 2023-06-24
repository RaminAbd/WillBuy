import { RecoverService } from "../businessLogic/recover.service";
import { SignInService } from "../businessLogic/sign-in.service";
import { SignUpService } from "../businessLogic/sign-up.service";
import { ValidateField } from "../models/ValidateField.model";

export class ValidatePersonalID {
  // PERSONAL_ID_PATTERN: any = /^\d{11}$/;
  PERSONAL_ID_PATTERN = /^\d+$/;

  validatePersonalId(personalId: ValidateField, mainClass: SignUpService | SignInService | RecoverService, requestIsValid: boolean) {
    if (this.PERSONAL_ID_PATTERN.test(personalId.value)) {
      personalId.isValid = true;
    }
    else {
      personalId.isValid = false;
      mainClass.messageService.add({ severity: 'error', summary: 'Error', detail: 'Personal ID is incorrect!' });
      requestIsValid = false;
    }
    return requestIsValid;
  }

}
