import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwitchAccountService } from 'src/app/businessLogic/switch-account.service';
import { UserAccounts } from 'src/app/models/UserAccounts.model';

@Component({
  selector: 'app-switch-account',
  templateUrl: './switch-account.component.html',
  styleUrls: ['./switch-account.component.scss']
})
export class SwitchAccountComponent {
  userAccounts: UserAccounts[] = []
  constructor(
    private service: SwitchAccountService,
    public route: ActivatedRoute
  ) { this.getAccounts() };
  routeTo(){

  }
  getAccounts() {
    this.service.getAccounts(this);
  }
  continueWithRole(item: UserAccounts) {
    console.log(item);
    this.service.continueByRole(item);
  }
}
