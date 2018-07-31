import { EmergencyEventModule } from './emergency-event.module';

describe('EmergencyEventModule', () => {
  let emergencyEventModule: EmergencyEventModule;

  beforeEach(() => {
    emergencyEventModule = new EmergencyEventModule();
  });

  it('should create an instance', () => {
    expect(emergencyEventModule).toBeTruthy();
  });
});
