import { Component } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { SaleOfferModel } from '../../models/sale-offer.model';

@Component({
  selector: 'app-car-confirm-reject-dialog',
  templateUrl: './car-confirm-reject-dialog.component.html',
  styleUrls: ['./car-confirm-reject-dialog.component.scss'],
})
export class CarConfirmRejectDialogComponent {
  Offers: SaleOfferModel[] = [];
  selectedNextOffer: SaleOfferModel = new SaleOfferModel();
  ProblemSources: any = [
    { name: 'Seller', key: 1 },
    { name: 'Buyer', key: 2 },
  ];
  selectedProblemSource: any = this.ProblemSources[0];
  constructor(
    public ref: DynamicDialogRef,
    public dialogService: DialogService,
    public config: DynamicDialogConfig,
  ) {
    this.Offers = config.data.offersForReject;
  }
  cancel() {
    this.ref.close();
  }
  submit() {
    var req = {
      saleId: this.config.data.id,
      problemSource: this.selectedProblemSource.key,
      continueWith: this.selectedNextOffer.id ? this.selectedNextOffer.id : '',
    };
    this.ref.close(req);
  }

  changeType() {
    if (this.selectedProblemSource.key === 1) {
      this.selectedNextOffer = new SaleOfferModel();
    }
  }
}
