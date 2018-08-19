import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRepairBarComponent } from './p-repair-bar.component';

describe('PRepairBarComponent', () => {
  let component: PRepairBarComponent;
  let fixture: ComponentFixture<PRepairBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRepairBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRepairBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
