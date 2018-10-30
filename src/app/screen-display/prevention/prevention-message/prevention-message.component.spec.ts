import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionMessageComponent } from './prevention-message.component';

describe('PreventionMessageComponent', () => {
  let component: PreventionMessageComponent;
  let fixture: ComponentFixture<PreventionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
