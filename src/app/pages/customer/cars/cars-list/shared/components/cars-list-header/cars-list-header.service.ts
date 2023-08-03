import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../../../../../services/local-storage.service';
import { CarsListHeaderComponent } from './cars-list-header.component';
import { BalancesApiService } from '../../../../../../../services/balances.api.service';
import { UserBalance } from '../../models/user-balance.model';

@Injectable({
  providedIn: 'root',
})
export class CarsListHeaderService {
  component: CarsListHeaderComponent;
  constructor(
    private storage: LocalStorageService,
    private balanceApi: BalancesApiService,
  ) {}

  getMyBalance() {
    var result = this.storage.getObject('SignInResult');
    console.log(result);
    this.balanceApi
      .GetByUserId(result.userId)
      .subscribe((resp: UserBalance) => {
        console.log(resp);
        this.component.UserBalance = resp.actualBalance;
      });
  }
}
