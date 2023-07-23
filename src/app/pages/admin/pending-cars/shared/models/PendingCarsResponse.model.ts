import { ProcessType } from "./ProcessType.model";

export class PendingCarsResponse{
  code: string;
	processTypeId: string;
	processType: ProcessType;
	asigneeId?: any;
	asignee?: any;
	processId: string;
	isCompleted: boolean;
	id: string;
}
