import { TestBed } from '@angular/core/testing';

import { BaseCrudApiService } from '../base-crud-api.service';

describe('BaseCrudApiService', () => {
  let service: BaseCrudApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCrudApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
