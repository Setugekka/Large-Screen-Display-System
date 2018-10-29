import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionRollComponent } from './prevention-roll.component';

describe('PreventionRollComponent', () => {
  let component: PreventionRollComponent;
  let fixture: ComponentFixture<PreventionRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
