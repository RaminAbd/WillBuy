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
import { CustomerComponent } from './pages/customer/customer.component';
import { CarsComponent } from './pages/customer/cars/cars.component';
import { CarsListComponent } from './pages/customer/cars/cars-list/cars-list.component';
import { SellCarComponent } from './pages/customer/cars/sell-car/sell-car.component';
import { CarLookupComponent } from './pages/customer/cars/sell-car/car-lookup/car-lookup.component';
import { DescribeVehicleComponent } from './pages/customer/cars/sell-car/describe-vehicle/describe-vehicle.component';
import { VehicleInvoiceComponent } from './pages/customer/cars/sell-car/vehicle-invoice/vehicle-invoice.component';
import { CarSaleTypeComponent } from './pages/customer/cars/sell-car/car-sale-type/car-sale-type.component';
import { CarSaleCheckoutComponent } from './pages/customer/cars/sell-car/car-sale-checkout/car-sale-checkout.component';
import { CarSaleFinishComponent } from './pages/customer/cars/sell-car/car-sale-finish/car-sale-finish.component';
import { PendingCarsComponent } from './pages/admin/pending-cars/pending-cars.component';
import { WorkOrderDetailComponent } from './pages/admin/pending-cars/shared/pages/work-order-detail/work-order-detail.component';
import { CarSalesDetailComponent } from './pages/customer/cars/cars-list/shared/pages/car-sales-detail/car-sales-detail.component';
import { SoldCarsComponent } from './pages/customer/sold-cars/sold-cars.component';
import { PurchasedCarsComponent } from './pages/customer/purchased-cars/purchased-cars.component';
import { NotifDetailComponent } from './pages/customer/notifications-history/shared/pages/notif-detail/notif-detail.component';
import { PaymentMethodComponent } from './pages/customer/payment-method/payment-method.component';
import { WorkOrderConfirmationComponent } from './pages/admin/pending-cars/shared/pages/work-order-confirmation/work-order-confirmation.component';
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'change-password/:personalId', component: ChangePasswordComponent },
  { path: 'switch-account/:userId', component: SwitchAccountComponent },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: 'cars',
        component: CarsComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [1] },
        children: [
          {
            path: 'list',
            component: CarsListComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'detail/:id',
            component: CarSalesDetailComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'notification/:id',
            component: NotifDetailComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          { path: '', redirectTo: 'list', pathMatch: 'full' },
        ],
      },
      {
        path: 'sell',
        component: SellCarComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [1] },
        children: [
          {
            path: 'lookup',
            component: CarLookupComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'vehicle-invoice/:vin',
            component: VehicleInvoiceComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'describe/:vin',
            component: DescribeVehicleComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'sale-type/:vin',
            component: CarSaleTypeComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'checkout/:vin',
            component: CarSaleCheckoutComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          {
            path: 'finish/:vin',
            component: CarSaleFinishComponent,
            canActivate: [RoleGuard],
            data: { permissionTypes: [1] },
          },
          { path: '', redirectTo: 'lookup', pathMatch: 'full' },
        ],
      },
      {
        path: 'sold-cars',
        component: SoldCarsComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [1] },
      },
      {
        path: 'payment',
        component: PaymentMethodComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [1] },
      },
      {
        path: 'purchased-cars',
        component: PurchasedCarsComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [1] },
      },
      { path: '', redirectTo: 'cars', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admins',
        component: AdminsComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [3] },
      },
      {
        path: 'operators',
        component: OperatorsComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [3] },
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [3, 2] },
      },
      {
        path: 'cars',
        component: PendingCarsComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [3, 2] },
      },
      {
        path: 'cars/vehicle-details',
        component: WorkOrderDetailComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [3, 2] },
      },
      {
        path: 'cars/confirmation',
        component: WorkOrderConfirmationComponent,
        canActivate: [RoleGuard],
        data: { permissionTypes: [3, 2] },
      },
      { path: '', redirectTo: 'admins', pathMatch: 'full' },
    ],
  },

  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
