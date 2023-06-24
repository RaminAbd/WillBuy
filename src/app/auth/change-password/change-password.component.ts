import { AfterViewInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangePasswordService } from 'src/app/businessLogic/change-password.service';
import { RecoverRequestDTO } from 'src/app/models/RecoverRequestDTO.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements AfterViewInit {
  input1: number;
  input2: number;
  input3: number;
  input4: number;
  input5: number;
  UserCode: any;
  disabledButton: boolean = false;
  RecoverRequestDTO: RecoverRequestDTO = new RecoverRequestDTO();
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public service: ChangePasswordService
  ) {
    this.service.sendVerificationCodeByPersonalId(this);
  };

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
            codeBlock?.classList.remove("hidden");
            code.innerText = userCode;
          } else {
            inputs[key + 1].focus();
            input.innerText = ''
          }
        }


      });
    });
  }

  routeTo() {
    this.router.navigate(['./sign-up'])
  }

  Submit() {
    this.service.ChangePassword(this);
  }
}
