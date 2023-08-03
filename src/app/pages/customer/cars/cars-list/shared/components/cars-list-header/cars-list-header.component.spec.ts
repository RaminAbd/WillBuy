import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListHeaderComponent } from './cars-list-header.component';

describe('CarsListHeaderComponent', () => {
  let component: CarsListHeaderComponent;
  let fixture: ComponentFixture<CarsListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
