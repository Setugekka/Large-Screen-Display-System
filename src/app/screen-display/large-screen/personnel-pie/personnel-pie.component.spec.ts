import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelPieComponent } from './personnel-pie.component';

describe('PersonnelPieComponent', () => {
  let component: PersonnelPieComponent;
  let fixture: ComponentFixture<PersonnelPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
