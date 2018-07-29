import { VideoModule } from './video.module';

describe('VideoModule', () => {
  let videoModule: VideoModule;

  beforeEach(() => {
    videoModule = new VideoModule();
  });

  it('should create an instance', () => {
    expect(videoModule).toBeTruthy();
  });
});
