import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PManagerBarComponent } from './p-manager-bar.component';

describe('PManagerBarComponent', () => {
  let component: PManagerBarComponent;
  let fixture: ComponentFixture<PManagerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PManagerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PManagerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
