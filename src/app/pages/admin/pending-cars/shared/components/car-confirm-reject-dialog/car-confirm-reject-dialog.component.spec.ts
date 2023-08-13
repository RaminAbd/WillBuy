import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfirmRejectDialogComponent } from './car-confirm-reject-dialog.component';

describe('CarConfirmRejectDialogComponent', () => {
  let component: CarConfirmRejectDialogComponent;
  let fixture: ComponentFixture<CarConfirmRejectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarConfirmRejectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarConfirmRejectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
