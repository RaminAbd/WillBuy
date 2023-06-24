import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem("token") as string;
    const systemLanguage = localStorage.getItem("systemLanguage") as string;
    if (this.token) {
      const req1 = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + this.token,
          'Accept-Language': systemLanguage
        }
      });
      return next.handle(req1);
    }
    else {
      return next.handle(req);
    }
  }
}
