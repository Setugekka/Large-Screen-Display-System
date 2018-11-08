import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPreventionComponent } from './weather-prevention.component';

describe('WeatherPreventionComponent', () => {
  let component: WeatherPreventionComponent;
  let fixture: ComponentFixture<WeatherPreventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPreventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
