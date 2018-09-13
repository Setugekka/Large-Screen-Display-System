import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorIndexComponent } from './por-index.component';

describe('PorIndexComponent', () => {
  let component: PorIndexComponent;
  let fixture: ComponentFixture<PorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
