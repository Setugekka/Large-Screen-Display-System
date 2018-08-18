import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageScatterComponent } from './message-scatter.component';

describe('MessageScatterComponent', () => {
  let component: MessageScatterComponent;
  let fixture: ComponentFixture<MessageScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
