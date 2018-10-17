import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McEduComponent } from './mc-edu.component';

describe('McEduComponent', () => {
  let component: McEduComponent;
  let fixture: ComponentFixture<McEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
