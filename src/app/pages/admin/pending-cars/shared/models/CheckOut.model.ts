import { CheckOutItem } from "./CheckOutItem.model";

export class CheckOut{
  userId: string;
	processId?: any;
	totalAmount: number;
	items: CheckOutItem[]=[];
	id?: any;
}


