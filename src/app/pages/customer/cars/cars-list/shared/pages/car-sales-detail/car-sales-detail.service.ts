import { Injectable } from '@angular/core';
import { CarSalesDetailComponent } from "./car-sales-detail.component";
import {
  WorkOrderDetailComponent
} from "../../../../../../admin/pending-cars/shared/pages/work-order-detail/work-order-detail.component";
import { TranslateService } from "@ngx-translate/core";
import { CarApplicationsService } from "../../../../../../../services/car-applications.service";
import { SalesApiService } from "../../services/sales.api.service";
import { FilesApiService } from "../../../../../../../services/files.service";
import { LocalStorageService } from "../../../../../../../services/local-storage.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CarSalesDetailService {
  component: CarSalesDetailComponent
  constructor(
    private translate: TranslateService,
    private salesService: SalesApiService,
    private blob: FilesApiService,
    private storage: LocalStorageService,
    private router: Router
  ) { }

  getDetail() {
    var req = {
      id: this.component.route.snapshot.paramMap.get('id') as string,
      lang: this.translate.currentLang
    }
    var selectedPermission = this.storage.getObject('selectedPermission');
    this.component.selectedPermission = selectedPermission;
    this.salesService.GetByIdByLang(this.salesService.serviceUrl, req).subscribe(resp => {
      if (resp.succeeded) {
        this.component.carDetail = resp.data;

        console.log(resp, selectedPermission)
        if(resp.data.sellerId === selectedPermission.id){
          this.component.isMySale = true;
        }
        else{
          if (resp.offers.length > 0) {
            if (resp.offers.find((x: any) => x.customerId === selectedPermission.id)) {
              this.component.alreadyHasOffered = true;
            }
          }
        }

      }
    })
  }
  Download(myfile: any) {
    this.blob.Download(myfile.id).subscribe((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      var a = document.createElement('a');
      a.href = fileURL;
      a.target = '_blank';
      a.download = myfile.fileName;
      document.body.appendChild(a);
      a.click();
    })
  }

  tradingBid() {
    var res = this.storage.getObject('selectedPermission');
    var req: any = {
      buyerId: res.id,
      saleId: this.component.route.snapshot.paramMap.get('id') as string,
      amount: this.component.BidValue
    }
    this.salesService.Trade(req).subscribe((resp => {
      this.router.navigate(['customer/cars']);
    }))
  }

  directBuy() {
    var res = this.storage.getObject('selectedPermission');
    var req: any = {
      customerId: res.id,
      saleId: this.component.route.snapshot.paramMap.get('id') as string,
    }
    this.salesService.Buy(req).subscribe((resp => {
      this.router.navigate(['customer/cars']);
    }))
  }
}
