export class PagingRequest {
  PageIndex: number = 1;
  PageSize: number = 10;
  SortField: string;
  SortOrder: number;
  SearchText: string;
}
