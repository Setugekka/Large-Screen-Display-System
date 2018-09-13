import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsIndexComponent } from './is-index.component';

describe('IsIndexComponent', () => {
  let component: IsIndexComponent;
  let fixture: ComponentFixture<IsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
