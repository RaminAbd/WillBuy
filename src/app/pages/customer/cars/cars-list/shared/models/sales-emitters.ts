import { EventEmitter } from '@angular/core';

export class SalesEmitters {
  SalesUpdated: any = new EventEmitter();
  NotificationReceived:any = new EventEmitter();
}
