import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAuthorityComponent } from './my-authority.component';

describe('MyAuthorityComponent', () => {
  let component: MyAuthorityComponent;
  let fixture: ComponentFixture<MyAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
