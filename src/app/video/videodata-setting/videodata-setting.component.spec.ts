import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodataSettingComponent } from './videodata-setting.component';

describe('VideodataSettingComponent', () => {
  let component: VideodataSettingComponent;
  let fixture: ComponentFixture<VideodataSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodataSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodataSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
