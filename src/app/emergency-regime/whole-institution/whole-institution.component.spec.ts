import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeInstitutionComponent } from './whole-institution.component';

describe('WholeInstitutionComponent', () => {
  let component: WholeInstitutionComponent;
  let fixture: ComponentFixture<WholeInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
