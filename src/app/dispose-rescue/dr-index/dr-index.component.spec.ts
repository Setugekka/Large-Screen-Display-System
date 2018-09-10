import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrIndexComponent } from './dr-index.component';

describe('DrIndexComponent', () => {
  let component: DrIndexComponent;
  let fixture: ComponentFixture<DrIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
