import { TestBed } from '@angular/core/testing';

import { SwitchAccountService } from './switch-account.service';

describe('SwitchAccountService', () => {
  let service: SwitchAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
