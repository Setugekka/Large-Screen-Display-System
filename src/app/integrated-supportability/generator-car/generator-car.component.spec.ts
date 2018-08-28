import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCarComponent } from './generator-car.component';

describe('GeneratorCarComponent', () => {
  let component: GeneratorCarComponent;
  let fixture: ComponentFixture<GeneratorCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
