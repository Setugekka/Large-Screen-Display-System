import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D5000Component } from './d5000.component';

describe('D5000Component', () => {
  let component: D5000Component;
  let fixture: ComponentFixture<D5000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D5000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D5000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
