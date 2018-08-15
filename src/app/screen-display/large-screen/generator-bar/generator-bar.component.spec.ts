import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorBarComponent } from './generator-bar.component';

describe('GeneratorBarComponent', () => {
  let component: GeneratorBarComponent;
  let fixture: ComponentFixture<GeneratorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
