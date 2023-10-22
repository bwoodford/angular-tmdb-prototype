import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFromToComponent } from './date-from-to.component';

describe('DateFromToComponent', () => {
  let component: DateFromToComponent;
  let fixture: ComponentFixture<DateFromToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFromToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFromToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
