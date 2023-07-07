import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DescribeVehicleComponent } from './describe-vehicle.component';
import { Router } from '@angular/router';
import { FilesApiService } from 'src/app/services/files.service';

@Injectable({
  providedIn: 'root'
})
export class DescribeVehicleService {
  component: DescribeVehicleComponent
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private blob:FilesApiService
  ) { }

  getForm(component: DescribeVehicleComponent) {
    this.component = component;
    var vin = this.component.route.snapshot.paramMap.get('vin') as string;
    var form = this.storage.getObject(vin)
    if (form) {
      this.component.Form = form;
      this.component.Form.carFaxOption = 2;
      console.log(form);
      if(this.component.Form.requiresCarDocument && !this.component.Form.carDocument){
        this.goToVehicleInvoice();
      }
    }
    else {
      this.goToLookUp();
    }
  }
  goToVehicleInvoice(){
    this.router.navigate(['customer', 'cars', 'sell', 'vehicle-invoice', this.component.Form.car.vin], {
      queryParams: { animate: true }
    });
  }
  goToLookUp(){
    this.router.navigate(['customer', 'cars', 'sell', 'lookup'], {
      queryParams: { animate: true }
    });
  }

  getFile(e: any) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const fd = new FormData();
      fd.append('file', files[i]);
      this.blob.UploadFile(fd).subscribe((resp: any) => {
        this.component.Form.carFax = resp.data;
        this.component.Form.carFax.extension = resp.data.fileExtension.split('/')[1].toUpperCase();
        this.component.disableNext = false;
        console.log(this.component.Form);
        this.component.file = null;
      });
    }
  }

  goToSaleType() {
    this.storage.saveObject(this.component.Form.car.vin, this.component.Form);
    this.router.navigate(['customer', 'cars', 'sell', 'sale-type', this.component.Form.car.vin], {
      queryParams: { animate: true }
    });
  }

}
