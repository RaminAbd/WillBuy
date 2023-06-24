import { ValidateField } from './ValidateField.model';
export class SignInRequestDTO{
  personalId:ValidateField = new ValidateField();
  password:ValidateField= new ValidateField();
}
