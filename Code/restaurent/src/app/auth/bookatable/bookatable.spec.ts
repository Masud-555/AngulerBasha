import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookatable } from './bookatable';

describe('Bookatable', () => {
  let component: Bookatable;
  let fixture: ComponentFixture<Bookatable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bookatable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookatable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
