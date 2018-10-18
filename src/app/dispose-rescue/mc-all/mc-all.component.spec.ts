import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McAllComponent } from './mc-all.component';

describe('McAllComponent', () => {
  let component: McAllComponent;
  let fixture: ComponentFixture<McAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
