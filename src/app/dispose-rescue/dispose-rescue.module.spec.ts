import { DisposeRescueModule } from './dispose-rescue.module';

describe('DisposeRescueModule', () => {
  let disposeRescueModule: DisposeRescueModule;

  beforeEach(() => {
    disposeRescueModule = new DisposeRescueModule();
  });

  it('should create an instance', () => {
    expect(disposeRescueModule).toBeTruthy();
  });
});
