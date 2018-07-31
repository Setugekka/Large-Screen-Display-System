import { TestBed, inject } from '@angular/core/testing';

import { EmergencyEventService } from './emergency-event.service';

describe('EmergencyEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmergencyEventService]
    });
  });

  it('should be created', inject([EmergencyEventService], (service: EmergencyEventService) => {
    expect(service).toBeTruthy();
  }));
});
