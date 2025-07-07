import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMenu } from './show-all-menu';

describe('ShowAllMenu', () => {
  let component: ShowAllMenu;
  let fixture: ComponentFixture<ShowAllMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
