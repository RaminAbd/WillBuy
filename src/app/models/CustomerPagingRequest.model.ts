import { PagingRequest } from "./PagingRequest.model";

export class CustomerPagingrequest extends PagingRequest {
  ServiceAgreementId: string;
  ServiceAgreementLevelId: string;
}
