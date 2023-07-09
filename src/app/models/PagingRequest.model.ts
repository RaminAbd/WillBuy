export class PagingRequest {
  ServiceAgreementId?:string;
  ServiceAgreementLevelId?:string;
  PageIndex: number = 1;
  PageSize: number = 10;
  SortField: string;
  SortOrder: number;
  SearchText: string;
}
