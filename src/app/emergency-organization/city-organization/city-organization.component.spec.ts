import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOrganizationComponent } from './city-organization.component';

describe('CityOrganizationComponent', () => {
  let component: CityOrganizationComponent;
  let fixture: ComponentFixture<CityOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
