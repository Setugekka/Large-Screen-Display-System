import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaircarTimelineComponent } from './repaircar-timeline.component';

describe('RepaircarTimelineComponent', () => {
  let component: RepaircarTimelineComponent;
  let fixture: ComponentFixture<RepaircarTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaircarTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaircarTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
