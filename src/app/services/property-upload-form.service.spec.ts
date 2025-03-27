import { TestBed } from '@angular/core/testing';

import { PropertyUploadFormService } from './property-upload-form.service';

describe('PropertyUploadFormService', () => {
  let service: PropertyUploadFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyUploadFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
