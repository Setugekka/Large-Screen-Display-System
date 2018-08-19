import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PExpertBarComponent } from './p-expert-bar.component';

describe('PExpertBarComponent', () => {
  let component: PExpertBarComponent;
  let fixture: ComponentFixture<PExpertBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PExpertBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PExpertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
