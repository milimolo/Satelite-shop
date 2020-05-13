import { TestBed } from '@angular/core/testing';

import { PriceFormatterService } from './price-formatter.service';

describe('PriceFormatterService', () => {
  let service: PriceFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
