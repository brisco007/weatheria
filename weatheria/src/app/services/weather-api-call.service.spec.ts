import { TestBed } from '@angular/core/testing';

import { WeatherApiCallService } from './weather-api-call.service';

describe('WeatherApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherApiCallService = TestBed.get(WeatherApiCallService);
    expect(service).toBeTruthy();
  });
});
