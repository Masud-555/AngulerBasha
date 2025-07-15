import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCashier } from './update-cashier';

describe('UpdateCashier', () => {
  let component: UpdateCashier;
  let fixture: ComponentFixture<UpdateCashier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCashier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCashier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
