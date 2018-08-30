import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDetailComponent } from './warning-detail.component';

describe('WarningDetailComponent', () => {
  let component: WarningDetailComponent;
  let fixture: ComponentFixture<WarningDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
