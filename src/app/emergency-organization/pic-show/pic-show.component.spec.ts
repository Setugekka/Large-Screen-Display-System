import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicShowComponent } from './pic-show.component';

describe('PicShowComponent', () => {
  let component: PicShowComponent;
  let fixture: ComponentFixture<PicShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
