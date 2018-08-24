import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceOrganizationComponent } from './province-organization.component';

describe('ProvinceOrganizationComponent', () => {
  let component: ProvinceOrganizationComponent;
  let fixture: ComponentFixture<ProvinceOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
