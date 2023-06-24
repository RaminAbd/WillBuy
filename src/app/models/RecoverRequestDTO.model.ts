import { ValidateField } from "./ValidateField.model";

export class RecoverRequestDTO {
  code: string;
  password: ValidateField = new ValidateField();
  confirmPassword: ValidateField = new ValidateField();
  userName: string;
}
