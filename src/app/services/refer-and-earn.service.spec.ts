import { TestBed } from '@angular/core/testing';

import { ReferAndEarnService } from './refer-and-earn.service';

describe('ReferAndEarnService', () => {
  let service: ReferAndEarnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferAndEarnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
