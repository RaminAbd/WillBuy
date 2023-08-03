import { TestBed } from '@angular/core/testing';

import { CarsListHeaderService } from './cars-list-header.service';

describe('CarsListHeaderService', () => {
  let service: CarsListHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsListHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
