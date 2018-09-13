import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmIndexComponent } from './pm-index.component';

describe('PmIndexComponent', () => {
  let component: PmIndexComponent;
  let fixture: ComponentFixture<PmIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
