import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCircleComponent } from './equipment-circle.component';

describe('EquipmentCircleComponent', () => {
  let component: EquipmentCircleComponent;
  let fixture: ComponentFixture<EquipmentCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
