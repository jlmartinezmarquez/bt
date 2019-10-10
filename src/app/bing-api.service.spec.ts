import { TestBed } from '@angular/core/testing';

import { BingApiService } from './bing-api.service';

describe('BingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BingApiService = TestBed.get(BingApiService);
    expect(service).toBeTruthy();
  });
});
