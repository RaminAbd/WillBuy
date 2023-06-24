import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthLeftSideComponent } from './components/auth-left-side/auth-left-side.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { RecoverComponent } from './auth/recover/recover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './auth/verification/verification.component';
import {ToastModule} from 'primeng/toast';
import { ToastComponent } from './components/toast/toast.component';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './auth/change-password/change-password.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwitchAccountComponent } from './auth/switch-account/switch-account.component';
import { HomeComponent } from './pages/customer/home/home.component';
import { AdminsComponent } from './pages/admin/admins/admins.component';
import { OperatorsComponent } from './pages/admin/operators/operators.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TokenInterceptor } from './core/TokenInterceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthLeftSideComponent,
    SignUpComponent,
    RecoverComponent,
    VerificationComponent,
    ToastComponent,
    ChangePasswordComponent,
    SwitchAccountComponent,
    AdminsComponent,
    OperatorsComponent,
    CustomersComponent,
    AdminComponent
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
