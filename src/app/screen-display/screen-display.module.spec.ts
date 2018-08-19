import { ScreenDisplayModule } from './screen-display.module';

describe('ScreenDisplayModule', () => {
  let screenDisplayModule: ScreenDisplayModule;

  beforeEach(() => {
    screenDisplayModule = new ScreenDisplayModule();
  });

  it('should create an instance', () => {
    expect(screenDisplayModule).toBeTruthy();
  });
});
