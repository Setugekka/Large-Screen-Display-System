import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvAllComponent } from './mv-all.component';

describe('MvAllComponent', () => {
  let component: MvAllComponent;
  let fixture: ComponentFixture<MvAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
