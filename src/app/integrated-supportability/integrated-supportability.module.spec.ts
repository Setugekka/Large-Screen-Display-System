import { IntegratedSupportabilityModule } from './integrated-supportability.module';

describe('IntegratedSupportabilityModule', () => {
  let integratedSupportabilityModule: IntegratedSupportabilityModule;

  beforeEach(() => {
    integratedSupportabilityModule = new IntegratedSupportabilityModule();
  });

  it('should create an instance', () => {
    expect(integratedSupportabilityModule).toBeTruthy();
  });
});
