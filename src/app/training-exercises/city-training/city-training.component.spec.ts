import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTrainingComponent } from './city-training.component';

describe('CityTrainingComponent', () => {
  let component: CityTrainingComponent;
  let fixture: ComponentFixture<CityTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
