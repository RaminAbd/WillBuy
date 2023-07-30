import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-customer-footer',
  templateUrl: './customer-footer.component.html',
  styleUrls: ['./customer-footer.component.scss'],
})
export class CustomerFooterComponent {
  selectedLanguage: string;
  showLanguages: boolean = false;
  constructor(private translate: TranslateService) {
    this.getDefaultLang();
  }
  getDefaultLang() {
    var systemLanguage = localStorage.getItem('systemLanguage') as string;
    switch (systemLanguage) {
      case 'az-Aze':
        this.selectedLanguage = 'Azerbaijani';
        break;
      case 'ru-Ru':
        this.selectedLanguage = 'Russian';
        break;
      case 'en-Us':
        this.selectedLanguage = 'English';
        break;
      default:
        this.selectedLanguage = 'English';
        break;
    }
  }

  selectLanguage(view: string, funcLang: string) {
    this.selectedLanguage = view;
    this.showLanguages = false;
    this.changeSelectedLang(funcLang);
  }

  changeSelectedLang(funcLang: any) {
    localStorage.setItem('systemLanguage', funcLang);
    this.translate.use(funcLang);
    console.log(funcLang);
  }
}
