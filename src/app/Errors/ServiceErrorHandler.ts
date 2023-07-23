import { MessageService } from "primeng/api";
import { ServiceResponse } from "../models/ServiceResponse.model";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceErrorHandler {
  constructor(public messageService: MessageService,) { };

  handleError(response: ServiceResponse) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: response.errorDescription });
    return;
  }
}
