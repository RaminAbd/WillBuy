import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-page-header',
  templateUrl: './admin-page-header.component.html',
  styleUrls: ['./admin-page-header.component.scss']
})
export class AdminPageHeaderComponent {
  PageTitle: string = '';
  CustomerName: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: LocalStorageService
  ) {
    this.getPageTitle();
    this.getPersonalInfo();
  }

  getPageTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const activeRoute = this.router.url;
        const pageTitle = activeRoute.split('/').pop();
        if (pageTitle) {
          const formattedTitle = pageTitle.replace(/[-_]/g, ' ').charAt(0).toUpperCase() + pageTitle.slice(1);
          this.PageTitle = formattedTitle;
        }
      }
    });
  }

  getPersonalInfo() {
    var permissionInfo = this.storage.getObject('selectedPermission');
    this.CustomerName = permissionInfo.firstName + ' ' + permissionInfo.lastName;
  }


}
