import { Injectable } from '@angular/core';
import { UsersApiService } from '../services/users-api.service';
import { SignInRequest } from '../models/SignInRequest.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private service: UsersApiService,
    private router: Router,
    private messageService: MessageService,
    private storage: LocalStorageService
  ) { }
  SignIn(req: SignInRequest) {
    this.service.Signin(req).subscribe(resp => {
      if (resp.succeeded) {
        this.storage.saveObject('SignInResult', resp.data)
        this.router.navigate(['./home'])

      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Username or password is incorrect' });
      }
    })
  }
}
