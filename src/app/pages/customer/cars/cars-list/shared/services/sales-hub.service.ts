import { Injectable } from '@angular/core';
import { PendingCarsEmitters } from '../../../../../admin/pending-cars/shared/models/PendingCarsEmitters';
import { LocalStorageService } from '../../../../../../services/local-storage.service';
import * as signalR from '@microsoft/signalr';
import { SalesEmitters } from '../models/sales-emitters';

@Injectable({
  providedIn: 'root',
})
export class SalesHubService {
  connection: any;
  userInfo: any;
  enableReconnection: boolean = false;
  emitters: SalesEmitters = new SalesEmitters();

  constructor(private storage: LocalStorageService) {}

  buildConnection() {
    this.enableReconnection = true;
    var resp = this.storage.getObject('SignInResult');
    if (resp) {
      var token = resp.accessToken;
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('https://willbuy-api.azurewebsites.net/sales/', {
          skipNegotiation: false,
          transport: signalR.HttpTransportType.LongPolling,
          accessTokenFactory: () => token,
        })
        .withAutomaticReconnect([
          5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 10000, 10000,
          10000,
        ])
        .configureLogging(signalR.LogLevel.Information)
        .build();

      this.openConnections();
      this.startConnection();
    }
  }

  openConnections() {
    this.connection.on('Connected', (value: any) => {});
    this.connection.on('ConnectionFailed', (value: any) => {
      this.buildConnection();
    });
    this.connection.onclose((error: Error | undefined) => {
      if (this.enableReconnection) this.reconnect();
    });

    this.connection.on('SalesUpdated', (value: any) => {
      this.emitters.SalesUpdated.emit(value);
    });
    this.connection.on('NotificationReceived', (value: any) => {
      this.emitters.NotificationReceived.emit(value);
    });
  }

  startConnection() {
    this.connection
      .start()
      .then(() => {
        console.log('Connection established');
      })
      .catch((error: Error) => {
        this.reconnect();
      });
  }

  getAllSales(){
    this.connection.invoke('getAllSales').then((response: any) => { })
  }

  reconnect() {
    setTimeout(() => {
      console.log('Attempting to reconnect...');
      this.buildConnection();
    }, 5000);
  }
  disableReconnection() {
    this.enableReconnection = false;
  }
}
