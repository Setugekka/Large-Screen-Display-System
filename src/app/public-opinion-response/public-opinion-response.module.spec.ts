import { PublicOpinionResponseModule } from './public-opinion-response.module';

describe('PublicOpinionResponseModule', () => {
  let publicOpinionResponseModule: PublicOpinionResponseModule;

  beforeEach(() => {
    publicOpinionResponseModule = new PublicOpinionResponseModule();
  });

  it('should create an instance', () => {
    expect(publicOpinionResponseModule).toBeTruthy();
  });
});
