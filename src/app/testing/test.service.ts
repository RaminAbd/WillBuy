import { Injectable } from "@angular/core";
import { test2Service } from './test2.service';

@Injectable()
export class testService {
  constructor(private checkService: test2Service) { };

  sum(arg: any, arg2?: any): any {
    if (!arg2) {
      return undefined;
    }
    return arg + arg2;
  }
  check(): boolean {
    return this.checkService.check();
  }
}
