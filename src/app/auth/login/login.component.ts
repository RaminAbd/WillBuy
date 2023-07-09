import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/businessLogic/sign-in.service';
import { SignInRequest } from 'src/app/models/SignInRequest.model';
import { SignInRequestDTO } from '../../models/SignInRequestDTO.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInRequest: SignInRequestDTO = new SignInRequestDTO();
  form: FormGroup;
  loading:boolean = false;
  constructor(private router: Router, private service: SignInService,  private formBuilder: FormBuilder,) {

  };

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      personalId: '',
      password: ''
    });
  }

  routeTo() {
    this.router.navigate(['./sign-up'])
  }
  goToRecover() {
    this.router.navigate(['./recover'])
  }
  submit() {
    this.loading = true;
    this.service.SignIn(this.signInRequest, this);
  }
}
