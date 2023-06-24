import { ValidateField } from "./ValidateField.model";

export class SignUpRequestDTO{
  personalId:ValidateField = new ValidateField();
  password:ValidateField = new ValidateField();
  confirmPassword:ValidateField = new ValidateField();
  firstName:ValidateField = new ValidateField();
  lastName:ValidateField = new ValidateField();
  phoneNumber:ValidateField = new ValidateField();
  agreePolicy:boolean = false;
  selectedType:boolean = false;
}
