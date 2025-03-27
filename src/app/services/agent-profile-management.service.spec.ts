import { TestBed } from '@angular/core/testing';

import { AgentProfileManagementService } from './agent-profile-management.service';

describe('AgentProfileManagementService', () => {
  let service: AgentProfileManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentProfileManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
