import { TechnicalSupportModule } from './technical-support.module';

describe('TechnicalSupportModule', () => {
  let technicalSupportModule: TechnicalSupportModule;

  beforeEach(() => {
    technicalSupportModule = new TechnicalSupportModule();
  });

  it('should create an instance', () => {
    expect(technicalSupportModule).toBeTruthy();
  });
});
