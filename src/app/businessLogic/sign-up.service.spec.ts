import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import { SignUpRequestDTO } from '../models/SignUpRequestDTO.model';

describe('SignUpService', () => {
  let service: SignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Personal Id should not be null or undefined', () => {
    var obj = new SignUpRequestDTO();
    expect(service.validatePersonalId(obj, true)).toBeFalsy();
  })
});
