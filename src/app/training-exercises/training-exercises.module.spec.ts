import { TrainingExercisesModule } from './training-exercises.module';

describe('TrainingExercisesModule', () => {
  let trainingExercisesModule: TrainingExercisesModule;

  beforeEach(() => {
    trainingExercisesModule = new TrainingExercisesModule();
  });

  it('should create an instance', () => {
    expect(trainingExercisesModule).toBeTruthy();
  });
});
