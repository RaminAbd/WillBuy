import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordService } from 'src/app/businessLogic/change-password.service';
import { RecoverService } from 'src/app/businessLogic/recover.service';
import { VerificationService } from 'src/app/businessLogic/verification.service';
import { ValidateField } from 'src/app/models/ValidateField.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent {
  constructor(
    private router: Router,
    private service: RecoverService,
  ) { };
  personalId: ValidateField = new ValidateField();

  routeTo() {
    this.router.navigate(['./sign-up'])
  }

  Submit() {
    this.service.Recover(this.personalId);
  }
}
