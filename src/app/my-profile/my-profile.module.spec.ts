import { MyProfileModule } from './my-profile.module';

describe('MyProfileModule', () => {
  let myProfileModule: MyProfileModule;

  beforeEach(() => {
    myProfileModule = new MyProfileModule();
  });

  it('should create an instance', () => {
    expect(myProfileModule).toBeTruthy();
  });
});
