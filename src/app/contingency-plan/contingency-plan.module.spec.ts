import { ContingencyPlanModule } from './contingency-plan.module';

describe('ContingencyPlanModule', () => {
  let contingencyPlanModule: ContingencyPlanModule;

  beforeEach(() => {
    contingencyPlanModule = new ContingencyPlanModule();
  });

  it('should create an instance', () => {
    expect(contingencyPlanModule).toBeTruthy();
  });
});
