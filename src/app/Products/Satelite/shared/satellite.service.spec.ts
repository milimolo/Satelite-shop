import { TestBed } from '@angular/core/testing';

import { SatelliteService } from './satellite.service';

describe('SateliteService', () => {
  let service: SatelliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatelliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
