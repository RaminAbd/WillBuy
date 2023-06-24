import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService,) {
    this.translate.addLangs(['ru-Ru', 'az-Aze', 'en-Us']);
    const langExists: boolean = !!localStorage.getItem('systemLanguage');
    if (!langExists) {
      translate.setDefaultLang('en-Us');
      localStorage.setItem('systemLanguage', 'en-Us');
      translate.use('en-Us');
    } else {
      const value: string = localStorage.getItem('systemLanguage') as string;
      translate.setDefaultLang(value);
      translate.use(value);
    }
  };
}
