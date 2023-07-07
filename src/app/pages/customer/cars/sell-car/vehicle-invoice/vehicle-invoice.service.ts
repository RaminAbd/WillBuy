import { Injectable } from '@angular/core';
import { VehicleInvoiceComponent } from './vehicle-invoice.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilesApiService } from 'src/app/services/files.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleInvoiceService {
  component: VehicleInvoiceComponent;
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private blob: FilesApiService
  ) { }
  getForm(component: VehicleInvoiceComponent) {
    this.component = component;
    var vin = this.component.route.snapshot.paramMap.get('vin') as string;
    var form = this.storage.getObject(vin)
    if (form) {
      this.component.Form = form;
      console.log(form);
    }
    else {
      this.goToLookUp();
    }
  }
  goToLookUp() {
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
        this.component.Form.carDocument = resp.data;
        this.component.disableNext = false;
        this.component.Form.carDocument.extension = resp.data.fileExtension.split('/')[1].toUpperCase();
        console.log(this.component.Form);
        this.component.file = null;
      });
    }
  }
  goToDescribeVehicle() {
    this.storage.saveObject(this.component.Form.car.vin, this.component.Form);
    this.router.navigate(['customer', 'cars', 'sell', 'describe', this.component.Form.car.vin], {
      queryParams: { animate: true }
    });
  }
}
