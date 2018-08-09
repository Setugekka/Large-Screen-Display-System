import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeScreenComponent } from './large-screen.component';

describe('LargeScreenComponent', () => {
  let component: LargeScreenComponent;
  let fixture: ComponentFixture<LargeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
