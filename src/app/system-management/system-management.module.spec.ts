import { SystemManagementModule } from './system-management.module';

describe('SystemManagementModule', () => {
  let systemManagementModule: SystemManagementModule;

  beforeEach(() => {
    systemManagementModule = new SystemManagementModule();
  });

  it('should create an instance', () => {
    expect(systemManagementModule).toBeTruthy();
  });
});
