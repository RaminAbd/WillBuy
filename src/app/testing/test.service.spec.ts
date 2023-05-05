import { testService } from "./test.service"
import { test2Service } from "./test2.service";
import { TestBed } from '@angular/core/testing';

describe('prostoy servis', () => {
  let service: testService;
  const FakeMock = { check: () => true };
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        testService,
        {provide: test2Service, useValue:FakeMock}
      ]
    })
    service = TestBed.get(testService);
  })
  it('should create class', () => {
    expect(service).toBeTruthy()
  })
  it('should sum of two args', () => {
    const sum = service.sum(1, 2);
    expect(sum).toBe(3);
  })
  it('should return undefined if there is no second arg', () => {
    const sum = service.sum(1);
    expect(sum).toBeUndefined();
  })
  it('should return true from other service', () => {
    const sum = service.check();
    expect(sum).toBeTruthy();
  })
})
