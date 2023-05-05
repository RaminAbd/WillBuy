import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  Toast:any = new EventEmitter();
  constructor() { }
  showToast(){
    this.Toast.emit(true);
    setTimeout(()=>{
      this.Toast.emit(false);
    },2000)
  }
}
