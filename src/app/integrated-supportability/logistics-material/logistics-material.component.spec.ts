import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsMaterialComponent } from './logistics-material.component';

describe('LogisticsMaterialComponent', () => {
  let component: LogisticsMaterialComponent;
  let fixture: ComponentFixture<LogisticsMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
