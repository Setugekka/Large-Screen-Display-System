import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvEduComponent } from './mv-edu.component';

describe('MvEduComponent', () => {
  let component: MvEduComponent;
  let fixture: ComponentFixture<MvEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
