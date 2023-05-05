import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/businessLogic/verification.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent {
  constructor(private router: Router, private service: VerificationService) { };
  personalId:string ;
  routeTo() {
     this.router.navigate(['./sign-up'])
  }
  goToVerification(){

    // this.service.SendVerificationCode(this.personalId);
      // this.router.navigate(['./verification'])
  }
}
