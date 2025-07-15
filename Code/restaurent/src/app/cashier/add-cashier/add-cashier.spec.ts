import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCashier } from './add-cashier';

describe('AddCashier', () => {
  let component: AddCashier;
  let fixture: ComponentFixture<AddCashier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCashier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCashier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
