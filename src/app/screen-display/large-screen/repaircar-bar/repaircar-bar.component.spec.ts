import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaircarBarComponent } from './repaircar-bar.component';

describe('RepaircarBarComponent', () => {
  let component: RepaircarBarComponent;
  let fixture: ComponentFixture<RepaircarBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaircarBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaircarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
