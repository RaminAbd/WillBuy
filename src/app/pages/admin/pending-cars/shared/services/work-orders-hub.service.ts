import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { PendingCarsEmitters } from '../models/PendingCarsEmitters';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class WorkOrdersHubService {
  connection: any;
  userInfo: any;
  enableReconnection: boolean = false;
  emitters: PendingCarsEmitters = new PendingCarsEmitters();

  constructor(private storage: LocalStorageService) {}

  buildConnection() {
    this.enableReconnection = true;
    var resp = this.storage.getObject('SignInResult');
    if (resp) {
      var token = resp.accessToken;
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('https://willbuy-api.azurewebsites.net/workorders/', {
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

    this.connection.on('WorkOrdersReceived', (value: any) => {
      this.emitters.WorkOrdersReceived.emit(value);
    });
  }

  startConnection() {
    this.connection
      .start()
      .then(() => {
        console.log('Connection established');
        this.joinToConnection();
      })
      .catch((error: Error) => {
        this.reconnect();
      });
  }

  joinToConnection() {
    this.connection.invoke('JoinToOperators').then(() => {});
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
