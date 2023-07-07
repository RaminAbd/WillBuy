import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesApiService extends BaseApiService {

  constructor(http: HttpClient) { super(http); }
  UploadFile(file: any) {
    return this.post('Files/Upload', file);
  }
}
