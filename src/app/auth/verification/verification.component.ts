import { Component, AfterViewInit, EventEmitter, Output, ViewChildren, QueryList, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/businessLogic/sign-up.service';
import { VerificationService } from 'src/app/businessLogic/verification.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements AfterViewInit {
  constructor(private router: Router, private service: VerificationService) {
    this.service.SendVerificationCode();
    this.PhoneNumber = this.service.getHiddenPhoneNumber();
  };

  input1: number;
  input2: number;
  input3: number;
  input4: number;
  input5: number;
  UserCode: any;
  disabledButton: boolean = true;
  PhoneNumber: any;


  ngAfterViewInit(): void {
    const inputs = document.querySelectorAll("input.input") as any;
    const codeBlock = document.getElementById("code-block") as any;
    const code = document.getElementById("code") as any;
    const form = document.querySelector("form") as any;
    inputs.forEach((input: any, key: any) => {
      input.addEventListener("keyup", () => {
        if (input.value) {
          if (key === 4) {
            const userCode = [...inputs].map((input) => input.value).join("");
            this.UserCode = userCode;
            this.disabledButton = false;
            codeBlock.classList.remove("hidden");
            code.innerText = userCode;
          } else {
            inputs[key + 1].focus();
            input.innerText = ''
            this.disabledButton = true;;

          }
        }
      });
    });
  }


  routeTo() {
    this.router.navigate(['./sign-up'])
  }

  submit() {
    this.service.VerifyCode(this.UserCode);
  }
}
