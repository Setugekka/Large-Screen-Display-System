import { EventRoutingModule } from './event-routing.module';

describe('EventRoutingModule', () => {
  let eventRoutingModule: EventRoutingModule;

  beforeEach(() => {
    eventRoutingModule = new EventRoutingModule();
  });

  it('should create an instance', () => {
    expect(eventRoutingModule).toBeTruthy();
  });
});
