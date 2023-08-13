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
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { AdminPageHeaderComponent } from './components/admin-page-header/admin-page-header.component';
import { AdminFilterTableComponent } from './components/admin-filter-table/admin-filter-table.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CustomerUpsertComponent } from './components/customer-upsert/customer-upsert.component';
import { DialogModule } from 'primeng/dialog';
import { CustomerComponent } from './pages/customer/customer.component';
import { CarsComponent } from './pages/customer/cars/cars.component';
import { CustomerSideBarComponent } from './components/customer-side-bar/customer-side-bar.component';
import { CustomerFooterComponent } from './components/customer-footer/customer-footer.component';
import { CustomerNavNotificationsComponent } from './components/customer-nav-notifications/customer-nav-notifications.component';
import { SellCarComponent } from './pages/customer/cars/sell-car/sell-car.component';
import { CarsListComponent } from './pages/customer/cars/cars-list/cars-list.component';
import { CarLookupComponent } from './pages/customer/cars/sell-car/car-lookup/car-lookup.component';
import { DescribeVehicleComponent } from './pages/customer/cars/sell-car/describe-vehicle/describe-vehicle.component';
import { VehicleInvoiceComponent } from './pages/customer/cars/sell-car/vehicle-invoice/vehicle-invoice.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CarSaleTypeComponent } from './pages/customer/cars/sell-car/car-sale-type/car-sale-type.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CarSaleCheckoutComponent } from './pages/customer/cars/sell-car/car-sale-checkout/car-sale-checkout.component';
import { CarSaleFinishComponent } from './pages/customer/cars/sell-car/car-sale-finish/car-sale-finish.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PendingCarsComponent } from './pages/admin/pending-cars/pending-cars.component';
import { WorkOrderDetailComponent } from './pages/admin/pending-cars/shared/pages/work-order-detail/work-order-detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { RejectDialogComponent } from './pages/admin/pending-cars/shared/components/reject-dialog/reject-dialog.component';
import { CarsListHeaderComponent } from './pages/customer/cars/cars-list/shared/components/cars-list-header/cars-list-header.component';
import { CarSalesDetailComponent } from './pages/customer/cars/cars-list/shared/pages/car-sales-detail/car-sales-detail.component';
import { NotificationsHistoryComponent } from './pages/customer/notifications-history/notifications-history.component';
import { SoldCarsComponent } from './pages/customer/sold-cars/sold-cars.component';
import { PurchasedCarsComponent } from './pages/customer/purchased-cars/purchased-cars.component';
import { OperatorUpsertComponent } from './pages/admin/operators/shared/components/operator-upsert/operator-upsert.component';
import { NotifDetailComponent } from './pages/customer/notifications-history/shared/pages/notif-detail/notif-detail.component';
import { PaymentMethodComponent } from './pages/customer/payment-method/payment-method.component';
import { WorkOrderConfirmationComponent } from './pages/admin/pending-cars/shared/pages/work-order-confirmation/work-order-confirmation.component';
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
    AdminComponent,
    AdminSideBarComponent,
    AdminPageHeaderComponent,
    AdminFilterTableComponent,
    CustomerUpsertComponent,
    CustomerComponent,
    CarsComponent,
    CustomerSideBarComponent,
    CustomerFooterComponent,
    CustomerNavNotificationsComponent,
    SellCarComponent,
    CarsListComponent,
    CarLookupComponent,
    DescribeVehicleComponent,
    VehicleInvoiceComponent,
    CarSaleTypeComponent,
    CarSaleCheckoutComponent,
    CarSaleFinishComponent,
    UsersTableComponent,
    PendingCarsComponent,
    WorkOrderDetailComponent,
    RejectDialogComponent,
    CarsListHeaderComponent,
    CarSalesDetailComponent,
    NotificationsHistoryComponent,
    SoldCarsComponent,
    PurchasedCarsComponent,
    OperatorUpsertComponent,
    NotifDetailComponent,
    PaymentMethodComponent,
    WorkOrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ImageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    InputNumberModule,
    TableModule,
    PaginatorModule,
    MultiSelectModule,
    DynamicDialogModule,
    InputSwitchModule,
    HttpClientModule,
    GalleriaModule,
    RadioButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    })
  ],
  providers: [
    DialogService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
