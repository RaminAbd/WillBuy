export class SignUpRequest {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  source: string;
  code: number;
  communicationType: number = 1;
}
