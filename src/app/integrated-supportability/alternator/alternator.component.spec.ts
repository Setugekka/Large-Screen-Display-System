import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatorComponent } from './alternator.component';

describe('AlternatorComponent', () => {
  let component: AlternatorComponent;
  let fixture: ComponentFixture<AlternatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
