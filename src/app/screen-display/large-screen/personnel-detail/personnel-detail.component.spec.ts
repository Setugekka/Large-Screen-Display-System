import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDetailComponent } from './personnel-detail.component';

describe('PersonnelDetailComponent', () => {
  let component: PersonnelDetailComponent;
  let fixture: ComponentFixture<PersonnelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
