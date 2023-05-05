import { TestBed } from '@angular/core/testing';

import { SmsApiService } from '../sms-api.service';

describe('SmsApiService', () => {
  let service: SmsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
