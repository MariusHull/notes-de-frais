import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardAccountManagerService } from './auth-guard-account-manager.service';

describe('AuthGuardAccountManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardAccountManagerService]
    });
  });

  it('should be created', inject([AuthGuardAccountManagerService], (service: AuthGuardAccountManagerService) => {
    expect(service).toBeTruthy();
  }));
});
