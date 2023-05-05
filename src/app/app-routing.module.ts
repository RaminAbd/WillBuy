import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { HomeComponent } from './pages/user/home/home.component';

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
