import { TestBed, inject } from '@angular/core/testing';

import { ScreenDisplayService } from './screen-display.service';

describe('ScreenDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenDisplayService]
    });
  });

  it('should be created', inject([ScreenDisplayService], (service: ScreenDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
