import { PreventionMonitoringModule } from './prevention-monitoring.module';

describe('PreventionMonitoringModule', () => {
  let preventionMonitoringModule: PreventionMonitoringModule;

  beforeEach(() => {
    preventionMonitoringModule = new PreventionMonitoringModule();
  });

  it('should create an instance', () => {
    expect(preventionMonitoringModule).toBeTruthy();
  });
});
