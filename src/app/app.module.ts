import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/user/home/home.component';
import { AuthLeftSideComponent } from './components/auth-left-side/auth-left-side.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { RecoverComponent } from './auth/recover/recover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './auth/verification/verification.component';
import {ToastModule} from 'primeng/toast';
import { ToastComponent } from './components/toast/toast.component';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthLeftSideComponent,
    SignUpComponent,
    RecoverComponent,
    VerificationComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputNumberModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
