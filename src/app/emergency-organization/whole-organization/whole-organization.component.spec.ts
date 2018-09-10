import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeOrganizationComponent } from './whole-organization.component';

describe('WholeOrganizationComponent', () => {
  let component: WholeOrganizationComponent;
  let fixture: ComponentFixture<WholeOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
