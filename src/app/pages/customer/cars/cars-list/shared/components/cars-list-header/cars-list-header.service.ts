import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../../../../../services/local-storage.service';
import { CarsListHeaderComponent } from './cars-list-header.component';
import { BalancesApiService } from '../../../../../../../services/balances.api.service';
import { UserBalance } from '../../models/user-balance.model';
import {SalesHubService} from "../../services/sales-hub.service";

@Injectable({
  providedIn: 'root',
})
export class CarsListHeaderService {
  component: CarsListHeaderComponent;
  constructor(
    private storage: LocalStorageService,
    private balanceApi: BalancesApiService,
    private hubService:SalesHubService
  ) {
    this.buildConection()
  }

  getMyBalance() {
    var result = this.storage.getObject('SignInResult');
    this.balanceApi
      .GetByUserId(result.userId)
      .subscribe((resp: UserBalance) => {
        this.component.UserBalance = resp.actualBalance;
      });
  }
  buildConection(){
    this.hubService.buildConnection();
    this.openConnections()
  }
  openConnections(){
    this.hubService.emitters.NotificationReceived.subscribe((resp:any)=>{
      this.component.notificationsReceived = true;
    })
  }
}
