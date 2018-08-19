import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentMaterialTreeComponent } from './urgent-material-tree.component';

describe('UrgentMaterialTreeComponent', () => {
  let component: UrgentMaterialTreeComponent;
  let fixture: ComponentFixture<UrgentMaterialTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentMaterialTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentMaterialTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
