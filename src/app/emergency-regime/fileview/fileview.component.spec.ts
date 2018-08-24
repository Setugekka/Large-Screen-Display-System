import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileviewComponent } from './fileview.component';

describe('FileviewComponent', () => {
  let component: FileviewComponent;
  let fixture: ComponentFixture<FileviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
