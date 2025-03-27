import { TestBed } from '@angular/core/testing';

import { SearchPropertiesService } from './search-properties.service';

describe('SearchPropertiesService', () => {
  let service: SearchPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
