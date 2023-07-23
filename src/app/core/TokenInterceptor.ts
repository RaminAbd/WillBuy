import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;
  constructor(private storage: LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var sResult = this.storage.getObject("SignInResult") as any;
    if (sResult) {
      this.token = sResult.accessToken;
      const systemLanguage = localStorage.getItem("systemLanguage") as string;
      const req1 = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.token}`,
          'Lang': systemLanguage
        }
      });
      return next.handle(req1);
    }
    else {
      return next.handle(req);
    }
  }
}
