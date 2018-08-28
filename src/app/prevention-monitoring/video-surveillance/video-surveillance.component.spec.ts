import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSurveillanceComponent } from './video-surveillance.component';

describe('VideoSurveillanceComponent', () => {
  let component: VideoSurveillanceComponent;
  let fixture: ComponentFixture<VideoSurveillanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSurveillanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
