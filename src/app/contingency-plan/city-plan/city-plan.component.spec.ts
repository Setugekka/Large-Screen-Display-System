import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPlanComponent } from './city-plan.component';

describe('CityPlanComponent', () => {
  let component: CityPlanComponent;
  let fixture: ComponentFixture<CityPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
