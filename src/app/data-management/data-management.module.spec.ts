import { DataManagementModule } from './data-management.module';

describe('DataManagementModule', () => {
  let dataManagementModule: DataManagementModule;

  beforeEach(() => {
    dataManagementModule = new DataManagementModule();
  });

  it('should create an instance', () => {
    expect(dataManagementModule).toBeTruthy();
  });
});
