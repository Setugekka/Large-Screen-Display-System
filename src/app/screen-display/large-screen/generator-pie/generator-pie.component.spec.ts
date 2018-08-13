import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPieComponent } from './generator-pie.component';

describe('GeneratorPieComponent', () => {
  let component: GeneratorPieComponent;
  let fixture: ComponentFixture<GeneratorPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
