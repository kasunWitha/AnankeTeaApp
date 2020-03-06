import { TestBed } from '@angular/core/testing';

import { TroughDataService } from './trough-data.service';

describe('TroughDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroughDataService = TestBed.get(TroughDataService);
    expect(service).toBeTruthy();
  });
});
