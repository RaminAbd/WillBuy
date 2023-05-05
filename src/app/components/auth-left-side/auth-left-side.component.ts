import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-left-side',
  templateUrl: './auth-left-side.component.html',
  styleUrls: ['./auth-left-side.component.scss']
})
export class AuthLeftSideComponent {
  @Input() type:number;
  @Output() routeTo:any = new EventEmitter();
}
