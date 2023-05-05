import { test2Service } from "./test2.service";
import { TestBed } from '@angular/core/testing';

fdescribe('prostoy servis 2', () => {
  let service: test2Service;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        test2Service
      ]
    })
    service = TestBed.get(test2Service);
  })
  it('should create class', () => {
    expect(service).toBeTruthy()
  })
  it('should return true', () => {
    const check = service.check();
    expect(check).toBeTruthy();
  })
})
