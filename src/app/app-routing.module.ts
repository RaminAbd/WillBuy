import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { SwitchAccountComponent } from './auth/switch-account/switch-account.component';
import { HomeComponent } from './pages/customer/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminsComponent } from './pages/admin/admins/admins.component';
import { OperatorsComponent } from './pages/admin/operators/operators.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { RoleGuard } from './core/role.guard';

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'change-password/:personalId', component: ChangePasswordComponent },
  { path: 'switch-account/:userId', component: SwitchAccountComponent },
  { path: 'home', component: HomeComponent, canActivate: [RoleGuard], data: { permissionTypes: [1] } },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'admins', component: AdminsComponent, canActivate: [RoleGuard], data: { permissionTypes: [3] } },
      { path: 'operators', component: OperatorsComponent, canActivate: [RoleGuard], data: { permissionTypes: [3] } },
      { path: 'customers', component: CustomersComponent, canActivate: [RoleGuard], data: { permissionTypes: [3, 2] } },
    ]
  },

  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
