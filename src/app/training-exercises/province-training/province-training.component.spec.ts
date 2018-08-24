import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceTrainingComponent } from './province-training.component';

describe('ProvinceTrainingComponent', () => {
  let component: ProvinceTrainingComponent;
  let fixture: ComponentFixture<ProvinceTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
