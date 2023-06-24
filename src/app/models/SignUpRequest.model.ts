export class SignUpRequest {
  personalId: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  code: number;
  communicationType: number = 1;
}
