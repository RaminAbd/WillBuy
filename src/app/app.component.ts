import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WillBuy';
  // showToast: boolean = false;
  // constructor(private toastService: ToastService) {
  //   this.toastService.Toast.subscribe((e: any) => {
  //     this.showToast = e;
  //   })
  // };

}
