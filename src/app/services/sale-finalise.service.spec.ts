import { TestBed } from '@angular/core/testing';

import { SaleFinaliseService } from './sale-finalise.service';

describe('SaleFinaliseService', () => {
  let service: SaleFinaliseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleFinaliseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
