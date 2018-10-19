import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDatatableComponent } from './single-datatable.component';

describe('SingleDatatableComponent', () => {
  let component: SingleDatatableComponent;
  let fixture: ComponentFixture<SingleDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
