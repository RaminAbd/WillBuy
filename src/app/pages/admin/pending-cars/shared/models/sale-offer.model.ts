import { SelectedPermissionModel } from '../../../../../models/SelectedPermission.model';

export class SaleOfferModel {
  customerId: string;
  customer: SelectedPermissionModel = new SelectedPermissionModel();
  saleId: string;
  value: number;
  isMaster: boolean;
  id: string;
  createdAt: any;
}
