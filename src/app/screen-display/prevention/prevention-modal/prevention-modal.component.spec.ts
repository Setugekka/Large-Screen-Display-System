import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionModalComponent } from './prevention-modal.component';

describe('PreventionModalComponent', () => {
  let component: PreventionModalComponent;
  let fixture: ComponentFixture<PreventionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
