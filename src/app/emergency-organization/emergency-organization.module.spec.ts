import { EmergencyOrganizationModule } from './emergency-organization.module';

describe('EmergencyOrganizationModule', () => {
  let emergencyOrganizationModule: EmergencyOrganizationModule;

  beforeEach(() => {
    emergencyOrganizationModule = new EmergencyOrganizationModule();
  });

  it('should create an instance', () => {
    expect(emergencyOrganizationModule).toBeTruthy();
  });
});
