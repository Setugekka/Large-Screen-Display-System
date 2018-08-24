import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecontrolComponent } from './firecontrol.component';

describe('FirecontrolComponent', () => {
  let component: FirecontrolComponent;
  let fixture: ComponentFixture<FirecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
