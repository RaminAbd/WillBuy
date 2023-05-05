import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { SignUpRequest } from '../../models/SignUpRequest.model';
import { SignUpRequestDTO } from '../../models/SignUpRequestDTO.model';
import { SignUpService } from 'src/app/businessLogic/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  SignUpRequest: SignUpRequestDTO = new SignUpRequestDTO();
  constructor(
    private router: Router,

    private signUpService: SignUpService
    ) { };

  routeTo() {
    this.router.navigate(['./sign-in'])
  }

  goToPolicy() {

  }
  submit() {
    this.signUpService.Submit(this.SignUpRequest);
  }

}
