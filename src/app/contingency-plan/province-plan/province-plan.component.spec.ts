import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincePlanComponent } from './province-plan.component';

describe('ProvincePlanComponent', () => {
  let component: ProvincePlanComponent;
  let fixture: ComponentFixture<ProvincePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
