import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCashier } from './view-cashier';

describe('ViewCashier', () => {
  let component: ViewCashier;
  let fixture: ComponentFixture<ViewCashier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCashier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCashier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
