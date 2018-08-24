import { EmergencyRegimeModule } from './emergency-regime.module';

describe('EmergencyRegimeModule', () => {
  let emergencyRegimeModule: EmergencyRegimeModule;

  beforeEach(() => {
    emergencyRegimeModule = new EmergencyRegimeModule();
  });

  it('should create an instance', () => {
    expect(emergencyRegimeModule).toBeTruthy();
  });
});
