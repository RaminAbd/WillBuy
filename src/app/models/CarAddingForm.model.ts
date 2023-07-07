import { Car } from "./Car.model";
import { DirectSaleOption } from "./DirectSaleOption.model";
import { TradingSaleOption } from "./TradingSaleOption.model";

export class CarAddingForm {
  userId?: any;
  customerId: string;
  vin?: any;
  car: Car = new Car();
  requiresCarDocument: boolean;
  carDocument?: any;
  carFaxOption: number;
  carFax?: any;
  saleOption: number;
  directSaleOption: DirectSaleOption = new DirectSaleOption();
  tradingSaleOption: TradingSaleOption = new TradingSaleOption();
}
