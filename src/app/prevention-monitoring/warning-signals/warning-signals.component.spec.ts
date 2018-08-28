import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSignalsComponent } from './warning-signals.component';

describe('WarningSignalsComponent', () => {
  let component: WarningSignalsComponent;
  let fixture: ComponentFixture<WarningSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningSignalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
