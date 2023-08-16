import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/local-storage.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  constructor(
    private router: Router,
    private storage:LocalStorageService
  ) {}
  goToCars() {
    var signInResult = this.storage.getObject('SignInResult');
    if(signInResult){
      this.router.navigate(['customer/cars/list']);
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
