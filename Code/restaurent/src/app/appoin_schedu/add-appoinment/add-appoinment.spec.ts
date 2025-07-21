import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoinment } from './add-appoinment';

describe('AddAppoinment', () => {
  let component: AddAppoinment;
  let fixture: ComponentFixture<AddAppoinment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppoinment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppoinment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
