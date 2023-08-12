import { Car } from "src/app/models/Car.model";
import { CustomerResponse } from "src/app/models/CustomersResponse.model";
import { DirectSaleOption } from "src/app/models/DirectSaleOption.model";
import { SystemFile } from "src/app/models/SystemFile.model";
import { TradingSaleOption } from "src/app/models/TradingSaleOption.model";

export class CarDetailDTO{
  userId: string;
	customer: CustomerResponse = new CustomerResponse();
	car: Car = new Car();
	carDocument: SystemFile = new SystemFile();
	carFax:  SystemFile = new SystemFile();
	saleOption: number;
	directSaleOption: DirectSaleOption = new DirectSaleOption();
	tradingSaleOption: TradingSaleOption = new TradingSaleOption();
	completionOption: number;
	rejectReasonId?: any;
	rejectReason?: any;
	saleType?: any;
	activeSale?: any;
  offers:any[]=[]
	id: string;
  sellerId:any;
}

