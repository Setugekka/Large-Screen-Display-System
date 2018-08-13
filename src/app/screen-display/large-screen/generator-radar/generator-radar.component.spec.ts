import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorRadarComponent } from './generator-radar.component';

describe('GeneratorRadarComponent', () => {
  let component: GeneratorRadarComponent;
  let fixture: ComponentFixture<GeneratorRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
