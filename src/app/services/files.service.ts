import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceErrorHandler } from '../Errors/ServiceErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class FilesApiService extends BaseApiService {

  constructor(http: HttpClient, handler: ServiceErrorHandler) { super(http, handler); }
  UploadFile(file: any) {
    return this.post('Files/Upload', file);
  }
  Download(id: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(this.BASE_URL + `Files/Download/${id}`, { headers: headers, responseType: 'blob' });
  }
}
