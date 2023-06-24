import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private storage: LocalStorageService,) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    let permissionTypes = route.data['permissionTypes'] as any[];
    var selectedPermission: any;
    selectedPermission = this.storage.getObject('selectedPermission');
    var result: boolean = false;
    var signInResult = this.storage.getObject('SignInResult');
    var token = signInResult.accessToken;
    if (!token) {
      this.router.navigate(['./sign-in']);
      result = false;
    }
    else {
      result = permissionTypes.includes(selectedPermission.accountType)
      if (!result) {
        this.router.navigate(['./sign-in']);
      }
    }
    return result;
  }

}
