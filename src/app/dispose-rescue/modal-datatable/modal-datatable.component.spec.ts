import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatatableComponent } from './modal-datatable.component';

describe('ModalDatatableComponent', () => {
  let component: ModalDatatableComponent;
  let fixture: ComponentFixture<ModalDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
