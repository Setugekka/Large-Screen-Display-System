import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholePlanComponent } from './whole-plan.component';

describe('WholePlanComponent', () => {
  let component: WholePlanComponent;
  let fixture: ComponentFixture<WholePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
