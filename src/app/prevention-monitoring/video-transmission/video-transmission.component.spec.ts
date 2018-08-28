import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTransmissionComponent } from './video-transmission.component';

describe('VideoTransmissionComponent', () => {
  let component: VideoTransmissionComponent;
  let fixture: ComponentFixture<VideoTransmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTransmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
