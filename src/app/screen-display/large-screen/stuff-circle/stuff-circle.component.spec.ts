import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffCircleComponent } from './stuff-circle.component';

describe('StuffCircleComponent', () => {
  let component: StuffCircleComponent;
  let fixture: ComponentFixture<StuffCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
