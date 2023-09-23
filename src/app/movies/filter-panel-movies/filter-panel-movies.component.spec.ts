import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanelMoviesComponent } from './filter-panel-movies.component';

describe('FilterPanelMoviesComponent', () => {
  let component: FilterPanelMoviesComponent;
  let fixture: ComponentFixture<FilterPanelMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPanelMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
