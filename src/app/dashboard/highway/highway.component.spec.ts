import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayComponent } from './highway.component';

describe('HighwayComponent', () => {
  let component: HighwayComponent;
  let fixture: ComponentFixture<HighwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
