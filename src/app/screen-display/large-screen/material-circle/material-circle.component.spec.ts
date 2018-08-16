import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCircleComponent } from './material-circle.component';

describe('MaterialCircleComponent', () => {
  let component: MaterialCircleComponent;
  let fixture: ComponentFixture<MaterialCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
